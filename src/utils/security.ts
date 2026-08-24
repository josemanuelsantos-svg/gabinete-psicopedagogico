// Cryptographic Security Module for EduBuenaventura
// Passwords are NOT stored in plaintext. They are protected using SHA-256 irreversible cryptographic hashing.

// Compute SHA-256 hash using native Web Crypto API
export async function computeSHA256(text: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(text.trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Authorized SHA-256 hashes (irreversible cryptographic signatures)
const AUTHORIZED_HASHES = {
  DOCENTE: [
    // SHA-256 of primary institutional teacher key
    'a8cfaaefdf557572e6bb60d2f7e5169485ca9d815b9e42c96d22302b9eaa14c7',
    '0abee0c71b1e4bbbcdd7740da0693157b7efb5d490d051affa6dabf56508a64a'
  ],
  ORIENTADOR: [
    // SHA-256 of primary orientation cabinet key
    '76c1c8d51e98cc07dcc05c00209b9515d5a1ea62bf011d92710b6bd4fa9d9932',
    '0a9c38aa84e150464aa24d1884d57f629a81350cfbb6ab60d4293a71705cc0e9'
  ]
};

export async function verifyRolePassword(role: 'DOCENTE' | 'ORIENTADOR', inputPassword: string): Promise<boolean> {
  if (!inputPassword) return false;
  
  const rawHash = await computeSHA256(inputPassword);
  const lowerHash = await computeSHA256(inputPassword.toLowerCase());

  const targetHashes = AUTHORIZED_HASHES[role] || [];
  return targetHashes.includes(rawHash) || targetHashes.includes(lowerHash);
}
