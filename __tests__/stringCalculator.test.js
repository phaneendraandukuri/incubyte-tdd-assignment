const add = require("../src/stringCalculator");

describe('String Calculator', () => {
  test('should return 0 for empty string', () => {
    expect(add('')).toBe(0);
  });
  test('should return the number itself when only one number is passed', () => {
    expect(add('4')).toBe(4);
  });
  test('should return sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });
  test('should return sum of multiple comma-separated numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });
});
