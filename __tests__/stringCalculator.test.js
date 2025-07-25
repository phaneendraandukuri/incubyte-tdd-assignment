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
  test('should support newlines as valid delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
  });
  test('should support custom single-character delimiter using // syntax', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
  test('should throw an error if input contains negative numbers', () => {
    expect(() => add('1,-2,3,-5')).toThrow('Negative numbers not allowed: -2, -5');
  });
  test('should ignore numbers greater than 1000', () => {
    expect(add('2,1001,6')).toBe(8);
  });
  test('should support custom delimiter of any length', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
  });

});
