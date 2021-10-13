// 直接引用 wasm 文件
import {fib as wasm_fib, fib_tail_call_optimized as wasm_fib_tail_call_optimized } from '../../rust/pkg/rust_bg.wasm'
import { fib, fibTailCallOptimized } from './fib.js'

function time(timerName, func) {
    console.time(timerName)
    console.log(`${timerName}: `, func())
    console.timeEnd(timerName)
}

// js 实现数字不能太大，否则 CPU 占满，运行不出来结果
const num = 20
time('wasm_fib', () => wasm_fib(num))
time('wasm_fib_tail_call_optimized', () => wasm_fib_tail_call_optimized(num, 0, 1))
time('fib', () => fib(num))
time('fibTailCallOptimized', () => fibTailCallOptimized(num))
