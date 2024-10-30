const Calculator = require('../src/calculator');

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calc.add(2, 3)).toBe(5);
    });

    test('should subtract two numbers correctly', () => {
        expect(calc.subtract(5, 3)).toBe(2);
    });
});