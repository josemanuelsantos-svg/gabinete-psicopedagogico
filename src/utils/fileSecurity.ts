// File Security & Data Protection Module for EduBuenaventura
// Validates file size, MIME types, extension consistency, and binary magic bytes to prevent spoofing.

export interface FileValidationResult {
  valid: boolean;
  error?: string;
  sanitizedName?: string;
  mimeType?: string;
  sizeBytes?: number;
}

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png'
];

const ALLOWED_EXTENSIONS = ['pdf', 'jpg', 'jpeg', 'png'];

// Magic bytes signatures
// PDF: %PDF (25 50 44 46)
// PNG: 89 50 4E 47 (0x89 'P' 'N' 'G')
// JPEG: FF D8 FF
async function inspectMagicBytes(file: File): Promise<{ matches: boolean; detectedMime?: string }> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (!reader.result || !(reader.result instanceof ArrayBuffer)) {
        return resolve({ matches: false });
      }

      const arr = new Uint8Array(reader.result).subarray(0, 4);
      let header = '';
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16).padStart(2, '0').toUpperCase();
      }

      // Check PDF: 25 50 44 46
      if (header.startsWith('25504446')) {
        return resolve({ matches: true, detectedMime: 'application/pdf' });
      }

      // Check PNG: 89 50 4E 47
      if (header.startsWith('89504E47')) {
        return resolve({ matches: true, detectedMime: 'image/png' });
      }

      // Check JPEG: FF D8 FF
      if (header.startsWith('FFD8FF')) {
        return resolve({ matches: true, detectedMime: 'image/jpeg' });
      }

      return resolve({ matches: false });
    };

    reader.onerror = () => resolve({ matches: false });
    // Read the first 8 bytes
    const blob = file.slice(0, 8);
    reader.readAsArrayBuffer(blob);
  });
}

export function sanitizeFileName(originalName: string): string {
  // Strip path traversal characters, spaces and non-alphanumeric (except . - _)
  const baseName = originalName.replace(/[^a-zA-Z0-9._-]/g, '_');
  // Avoid excessive length
  return baseName.slice(0, 80);
}

export async function validateAttachment(file: File): Promise<FileValidationResult> {
  if (!file) {
    return { valid: false, error: 'No se ha proporcionado ningún archivo.' };
  }

  // 1. Size Validation
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `El archivo supera el tamaño máximo permitido de 5 MB (tamaño actual: ${(file.size / (1024 * 1024)).toFixed(2)} MB).`
    };
  }

  if (file.size === 0) {
    return { valid: false, error: 'El archivo está vacío.' };
  }

  // 2. Extension Validation
  const parts = file.name.split('.');
  if (parts.length < 2) {
    return { valid: false, error: 'El archivo carece de extensión válida.' };
  }

  const ext = parts.pop()?.toLowerCase() || '';
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return {
      valid: false,
      error: `Formato de archivo .${ext} no autorizado. Únicamente se permiten evidencias en PDF, JPG o PNG.`
    };
  }

  // 3. MIME Type consistency
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: `Tipo de archivo (${file.type || 'desconocido'}) no admitido. Se requiere PDF, JPG o PNG.`
    };
  }

  // 4. Magic Bytes binary inspection (anti-spoofing)
  const magic = await inspectMagicBytes(file);
  if (!magic.matches) {
    return {
      valid: false,
      error: 'El contenido binario del archivo no coincide con su extensión declarada (posible archivo manipulado o ejecutable encubierto).'
    };
  }

  // Check that declared MIME aligns with binary signature
  if (magic.detectedMime && magic.detectedMime !== file.type && !(magic.detectedMime === 'image/jpeg' && file.type === 'image/jpg')) {
    return {
      valid: false,
      error: `Firma binaria (${magic.detectedMime}) no coincide con el tipo reportado (${file.type}).`
    };
  }

  return {
    valid: true,
    sanitizedName: sanitizeFileName(file.name),
    mimeType: magic.detectedMime || file.type,
    sizeBytes: file.size
  };
}
