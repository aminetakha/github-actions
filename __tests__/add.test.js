const { add } = require("..");

test('1 + 2 should return 3', () => {
    expect(add(1, 2)).toBe(3)
})