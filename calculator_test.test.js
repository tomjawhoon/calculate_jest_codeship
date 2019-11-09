const calculator = require('./calculator_test')

describe('add function', () => {
    test('show data =  return 6 if a = 1 and b = 1', () => {
        const a = 1;
        const b = 5;
        const expected = 6;
        const result = calculator.add(a, b);
        expect(result).toBe(expected)
    });
});
describe('minus function', () => {
    test('show data = 1 if a = 2 and b = 1', () => {
        const a = 2;
        const b = 1;
        const expected = 1;
        const result = calculator.minus(a, b);
        expect(result).toBe(expected)
    });
});
