const square = require("./square");

describe('square', () => {
    let mockValue;
    // Before Each
    beforeEach(() => {
        // Add into DataBase
    })
    // Before All
    beforeAll(() => {

    })

    test('Коректное значения', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
    });
    test('Коректное значения (функция)', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
    });
    test('Коректное значения (Mock)', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2)
        expect(spyMathPow).toBeCalledTimes(1);
    });
    test('Коректное значения (Mock trick)', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1)
        expect(spyMathPow).toBeCalledTimes(0);
    });

    // After Each
    afterEach(() => {
        jest.clearAllMocks();
    })
    // After all
    afterAll(() => {

    })
})