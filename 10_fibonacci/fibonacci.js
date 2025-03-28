const fibonacci = function(n) {
    n = Number(n); // Convert input to a number in case it's a string

    if (n < 0) return "OOPS"; // Reject negative numbers
    if (n === 0) return 0; // 0th Fibonacci number is 0
    if (n === 1) return 1; // 1st Fibonacci number is 1

    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;