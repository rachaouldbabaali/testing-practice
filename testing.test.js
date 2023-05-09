const stringLength = require('./StringLength');
const reverseString = require('./ReverseString');
const calculator = require('./Calculator');

test('stringLength("Hello") should return 5', () => {
    expect(stringLength("Hello")).toBe(5);
}
);

test('stringLength("") should throw an error', () => {
    expect(() => stringLength("")).toThrow();
}
);

test('stringLength("Hello World") should throw an error', () => {
    expect(() => stringLength("Hello World")).toThrow();
}
);

test('reverseString("Hello") should return "olleH"', () => {
    expect(reverseString("Hello")).toBe("olleH");
}
);

test('reverseString("") should return ""', () => {
    expect(reverseString("")).toBe("");
}
);



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
    
}
);

