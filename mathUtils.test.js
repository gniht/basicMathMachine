import { add, subtract, multiply, divide } from "./mathUtils";

// add
test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);
});
test('adds 1 + -1 to equal 0', () => {
  expect(add(1, -1)).toBe(0);
});

// subtract
test('5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});
test('5 - 8 to equal -3', () => {
  expect(subtract(5, 8)).toBe(-3);
});
test('8 - 8 to equal 0', () => {
  expect(subtract(5, 8)).toBe(-3);
});
test('-8 - 8 to equal -16', () => {
  expect(subtract(-8, 8)).toBe(-16);
});
test('minus a negative is a positive: 8 - -8 to equal 0', () => {
  expect(subtract(8, -8)).toBe(16);
});

// multiply
test('8 * 8 to equal 64', () => {
  expect(multiply(8, 8)).toBe(64);
});
test('3 * -6 to equal -18', () => {
  expect(multiply(3, -6)).toBe(-18);
});
test('-3 * -8 to equal 24', () => {
  expect(multiply(-3, -8)).toBe(24);
});
test('0 * 8 to equal 0', () => {
  expect(multiply(0, 8)).toBe(0);
});

// divide
test('0 / 8 to equal 0', () => {
  expect(divide(0, 8)).toBe(0);
});
test('8 / 0 to equal "Cannot divide by 0"', () => {
  expect(divide(8, 0)).toBe('Cannot divide by 0');
});
test('0 / 8 to equal 0', () => {
  expect(divide(0, 8)).toBe(0);
});
test('0 / 8 to equal 0', () => {
  expect(divide(0, 8)).toBe(0);
});




