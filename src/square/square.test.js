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

    // After Each
    afterEach(() => {
        // Delete from database
    })
    // After all
    afterAll(() => {

    })
})