// Privacy, Consent & Access Audit Module for EduBuenaventura
// RGPD / LOPD-GDD compliance, rate-limiting, and UUID generation

export const CURRENT_PRIVACY_POLICY_VERSION = 'v2.4-2026';

export interface PrivacyConsentRecord {
  policyVersion: string;
  acceptedAt: string; // ISO 8601 string
  userEmail: string;
  userName: string;
  userRole: string;
  ipContext?: string;
}

export interface AccessAuditLogEntry {
  id: string;
  timestamp: string;
  action: 'CONSULTA_EXPEDIENTE' | 'CREACION_EXPEDIENTE' | 'DICTAMEN_EXPEDIENTE' | 'CONSULTA_DENEGADA' | 'LOGIN_EXITOSO';
  actorEmail: string;
  actorRole: string;
  caseIdMasked?: string;
  success: boolean;
  notes?: string;
}

// Generate unpredictable, cryptographically random UUIDv4
export function generateSecureCaseId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback using crypto.getRandomValues
  const rnd = new Uint8Array(16);
  crypto.getRandomValues(rnd);
  rnd[6] = (rnd[6] & 0x0f) | 0x40; // Version 4
  rnd[8] = (rnd[8] & 0x3f) | 0x80; // Variant 10
  const hex = Array.from(rnd, b => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

// Mask Case ID for audit logs to prevent exposing full identifier in logs
export function maskIdentifier(id: string): string {
  if (!id || id.length < 8) return '****';
  return `${id.slice(0, 4)}...${id.slice(-4)}`;
}

// In-memory rate limiter to prevent enumeration attacks
interface RateLimitTracker {
  failedAttempts: number;
  blockedUntilTimestamp: number;
}

const lookupRateLimits = new Map<string, RateLimitTracker>();
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_PERIOD_MS = 60 * 1000; // 1 minute lockout

export function checkLookupRateLimit(userKey: string): { allowed: boolean; waitSeconds?: number } {
  const now = Date.now();
  const tracker = lookupRateLimits.get(userKey);

  if (!tracker) {
    return { allowed: true };
  }

  if (tracker.blockedUntilTimestamp > now) {
    const remainingSeconds = Math.ceil((tracker.blockedUntilTimestamp - now) / 1000);
    return { allowed: false, waitSeconds: remainingSeconds };
  }

  // Reset if lockout period expired
  if (tracker.blockedUntilTimestamp > 0 && tracker.blockedUntilTimestamp <= now) {
    lookupRateLimits.delete(userKey);
    return { allowed: true };
  }

  return { allowed: true };
}

export function recordFailedLookup(userKey: string): { blocked: boolean; waitSeconds?: number } {
  const now = Date.now();
  const tracker = lookupRateLimits.get(userKey) || { failedAttempts: 0, blockedUntilTimestamp: 0 };
  tracker.failedAttempts += 1;

  if (tracker.failedAttempts >= MAX_FAILED_ATTEMPTS) {
    tracker.blockedUntilTimestamp = now + LOCKOUT_PERIOD_MS;
    lookupRateLimits.set(userKey, tracker);
    return { blocked: true, waitSeconds: Math.ceil(LOCKOUT_PERIOD_MS / 1000) };
  }

  lookupRateLimits.set(userKey, tracker);
  return { blocked: false };
}

export function recordSuccessfulLookup(userKey: string): void {
  lookupRateLimits.delete(userKey);
}

// In-memory audit log for security accountability
const localAuditLogs: AccessAuditLogEntry[] = [];

export function logSecurityEvent(entry: Omit<AccessAuditLogEntry, 'id' | 'timestamp'>): void {
  const logEntry: AccessAuditLogEntry = {
    id: generateSecureCaseId(),
    timestamp: new Date().toISOString(),
    ...entry
  };
  localAuditLogs.push(logEntry);
  // Cap audit log length to prevent memory leakage
  if (localAuditLogs.length > 200) {
    localAuditLogs.shift();
  }
}

export function getAuditLogs(): AccessAuditLogEntry[] {
  return [...localAuditLogs];
}
