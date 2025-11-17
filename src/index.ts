import Base64 from "./NativeReactNativeCrabyBase64";

/**
 * Decode Base64 into raw bytes (returned again as base64)
 * NOTE: Craby does not support ArrayBuffer/Uint8Array, so JS must convert later.
 */
export function decodeToBytes(b64: string): string {
  return Base64.decodeToBytes(b64);
}

/**
 * Decode Base64 into a UTF-8 string.
 */
export function decodeToString(b64: string): string {
  return Base64.decodeToString(b64);
}

/**
 * Encode a UTF-8 string to Base64.
 */
export function encodeString(input: string): string {
  return Base64.encodeString(input);
}

/**
 * Default export containing all Base64 methods.
 */
export default {
  encodeString,
  decodeToString,
  decodeToBytes,
};
