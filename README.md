<a href="https://gauthamvijay.com">
  <picture>
    <img alt="react-native-craby-base64" src="./docs/img/banner.png" />
  </picture>
</a>

A **React Native Craby Module** that provides **high-performance Base64 encoding and decoding** using a **Rust backend**.

Built with **Craby** (TurboModule generator for Rust) and optimized for mobile performance on both **iOS** and **Android**.

---

## 🚀 Why This Library Exists

Most Base64 libraries in React Native:

- run in JS (slow)
- allocate unnecessary buffers
- cannot handle large binary payloads efficiently
- do not use JSI/TurboModules
- do not support Rust (fastest safe implementation)

`react-native-craby-base64` solves all of this:

- ⚡️ **Rust-backed Base64 encode/decode**
- 🧠 **No bridge overhead** (JSI & Craby module)
- 📱 **iOS + Android native support**
- 🔥 **Fast enough for video, images, crypto, and audio pipelines**

---

## ✨ Features

- **encodeString(input: string): string**
  Convert any UTF-8 string → Base64.

- **decodeToString(b64: string): string**
  Decode Base64 → UTF-8 string.

- **decodeToBytes(b64: string): string**
  Base64 → binary bytes (returned as Base64 due to Craby limitations).
  Convert to Uint8Array in JS easily.

- **Zero-copy Rust implementation**
  Using the optimized `base64` crate.

- **TurboModule + Craby + Rust**
  No async bridge. No JS overhead. Pure native.

---

## 📦 Installation

```
npm install react-native-craby-base64
```

or

```
yarn add react-native-craby-base64
```

Then update native files:

### iOS

```
cd ios && pod install
```

### Android

No extra steps — Gradle automatically compiles the Rust module.

---

## ⚙️ Usage

```tsx
import Base64 from "react-native-craby-base64";

// Encode
const b64 = Base64.encodeString("Hello world!");
console.log("Encoded:", b64);

// Decode to string
const decoded = Base64.decodeToString(b64);
console.log("Decoded string:", decoded);

// Decode raw bytes (Base64 → Uint8Array)
const raw = Base64.decodeToBytes(b64);
const bytes = Uint8Array.from(atob(raw), (c) => c.charCodeAt(0));

console.log("Decoded bytes:", bytes);
```

---

## 🧠 API

```ts
interface Base64Module {
  encodeString(input: string): string;
  decodeToString(b64: string): string;
  decodeToBytes(b64: string): string; // base64-encoded byte buffer
}
```

> **Note:**
> Craby does not support returning `Uint8Array` or `ArrayBuffer`.
> `decodeToBytes()` returns a Base64 representation of the raw bytes;
> convert to `Uint8Array` in JS.

Helper for convenience:

```ts
function base64ToUint8Array(b64: string) {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return arr;
}
```

---

## 🛠️ Under the Hood

This library uses:

- **Rust** for extremely fast Base64 operations
- **Craby** to generate TurboModule bindings
- **CXX (downgraded)** to ensure compatibility with Android NDK (C++17 only)
- **JSI** for direct memory access with zero bridge overhead

Rust implementation uses:

```rust
general_purpose::STANDARD.encode(...)
general_purpose::STANDARD.decode(...)
```

Clean, robust, battle-tested.

---

## 📱 Supported Platforms

| Platform                     | Status           |
| ---------------------------- | ---------------- |
| **iOS**                      | ✅ Supported     |
| **Android**                  | ✅ Supported     |
| **App Clips**                | ✅ Works         |
| **Expo (Custom Dev Client)** | ⚠️ Needs plugin  |
| **Web**                      | 🚫 Not supported |

---

## 🧩 Development

This library was built with:

- Rust
- Craby
- CXX
- React Native TurboModules

---

## 🤝 Contributing

Pull requests are welcome — especially improvements for:

- full binary API support
- ArrayBuffer bridging
- SIMD accelerated Base64
- RN New Architecture enhancements

---

## 🪪 License

MIT © [Gautham Vijayan](https://gauthamvijay.com)

---