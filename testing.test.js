const stringLength = require('./StringLength');
const reverseString = require('./ReverseString');
const calculator = require('./Calculator');
const capitalize = require('./Capitalize');

describe ('stringLength', () => {
    test('stringLength("Hello") should return 5', () => {
        expect(stringLength("Hello")).toBe(5);
    }
    );

    test('stringLength("") should throw an error', () => {
        expect(() => stringLength("")).toThrow("Input string must be at least 1 character long.");
    }
    );

    test('stringLength("Hello World!") should throw an error', () => {
        expect(() => stringLength("Hello World!")).toThrow("Input string must not be longer than 10 characters.");
    }
    );

});

describe ('reverseString', () => {
    test('reverseString("Hello") should return "olleH"', () => {
        expect(reverseString("Hello")).toBe("olleH");
    }
    );

    test('reverseString("") should return ""', () => {
        expect(reverseString("")).toBe("");
    }
    );

    test('reverseString("Hello World!") should return "!dlroW olleH"', () => {
        expect(reverseString("Hello World!")).toBe("!dlroW olleH");
    }
    );
});

describe ('calculator', () => {
    test('add(1, 2) should return 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    }
    );

    test('subtract(1, 2) should return -1', () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    }
    );

    test('divide(1, 2) should return 0.5', () => {
        expect(calculator.divide(1, 2)).toBe(0.5);
    }
    );

    test('multiply(1, 2) should return 2', () => {
        expect(calculator.multiply(1, 2)).toBe(2);
    }
    );

}
);

describe ('capitalize', () => {
    test('capitalize("hello") should return "Hello"', () => {
        expect(capitalize("hello")).toBe("Hello");
    }
    );

    test('capitalize("hello world!") should return "Hello world!"', () => {
        expect(capitalize("hello world!")).toBe("Hello world!");
    }
    );

    test('capitalize("123") should return "123"', () => {
        expect(capitalize("123")).toBe("123");
    }
    );

    test('capitalize("") should return ""', () => {
        expect(capitalize("")).toBe("");
    }
    );

});