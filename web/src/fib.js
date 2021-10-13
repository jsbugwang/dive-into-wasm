function fib(i) {
    if (i <= 1) return i

    return fib(i - 1) + fib(i - 2)
}


function fibTailCallOptimized(i, prev = 0, next = 1) {
    if (i <= 1) return next

    return fibTailCallOptimized(i - 1, next, prev + next)
}

export {
    fib,
    fibTailCallOptimized
}