// Sample test file
const { greet, add } = require('./index');

describe('Sample Tests', () => {
  test('greet function', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  test('add function', () => {
    expect(add(2, 3)).toBe(5);
  });
});