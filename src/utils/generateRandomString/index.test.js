const { generateRandomString } = require('./index.js');

describe('generateRandomString', () => {
  test('returns a string with random length between 3 and 15 characters', () => {
    const result = generateRandomString();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThanOrEqual(3);
    expect(result.length).toBeLessThanOrEqual(15);
  });

  test('returns a string with random characters', () => {
    const result1 = generateRandomString();
    const result2 = generateRandomString();
    expect(result1).not.toBe(result2);
  });
});