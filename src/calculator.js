let c = 0;

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        if (a === 0) return 0;
        return a * b;
    }
}

module.exports = Calculator;
