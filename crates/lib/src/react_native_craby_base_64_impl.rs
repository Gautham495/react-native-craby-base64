use craby::{prelude::*, throw};
use base64::{engine::general_purpose, Engine as _};

use crate::generated::*;

pub struct ReactNativeCrabyBase64 {
    ctx: Context,
}

#[craby_module]
impl ReactNativeCrabyBase64Spec for ReactNativeCrabyBase64 {

    fn decode_to_bytes(&mut self, b_64: &str) -> String {
        let decoded = match general_purpose::STANDARD.decode(b_64.as_bytes()) {
            Ok(bytes) => bytes,
            Err(_) => throw!("Invalid base64 string"),
        };

        // Return binary bytes as base64 since Craby can't return Uint8Array
        general_purpose::STANDARD.encode(decoded)
    }

    fn decode_to_string(&mut self, b_64: &str) -> String {
        let decoded = match general_purpose::STANDARD.decode(b_64.as_bytes()) {
            Ok(bytes) => bytes,
            Err(_) => throw!("Invalid base64 string"),
        };

        match String::from_utf8(decoded) {
            Ok(s) => s,
            Err(_) => throw!("Invalid UTF-8"),
        }
    }

    fn encode_string(&mut self, input: &str) -> String {
        general_purpose::STANDARD.encode(input.as_bytes())
    }
}
