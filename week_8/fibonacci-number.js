/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
    if (n < 2) return n;

    let a = 0, b = 1;
    for (let i = 1; i < n; i++) {
        [a,b] = [b,a+b];
    }
    return b;
};

// expect 3
console.log(fib(4));