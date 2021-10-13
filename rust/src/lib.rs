extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}

#[wasm_bindgen]
pub fn fib(i: u32) -> u32 {
    match i {
        0 => 0,
        1 => 1,
        _ => fib(i - 1) + fib(i - 2)
    }
}

#[wasm_bindgen]
pub fn fib_tail_call_optimized(i: u32, prev: u32, next: u32) -> u32 {
    match i {
        0 => next,
        1 => next,
        _ => fib_tail_call_optimized(i - 1, next, prev + next)
    }
}