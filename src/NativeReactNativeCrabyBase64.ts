import type { NativeModule } from "craby-modules";

import { NativeModuleRegistry } from "craby-modules";

interface Spec extends NativeModule {
  encodeString(input: string): string;
  decodeToString(b64: string): string;
  decodeToBytes(b64: string): string;
}

export default NativeModuleRegistry.getEnforcing<Spec>(
  "ReactNativeCrabyBase64"
);
