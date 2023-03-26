const { validateLanguage } = require('./index');

describe('validateLanguage', () => {
  const validLanguage = 'en';
  const invalidLanguage = 'invalid';

  test('should not throw an error for valid language', () => {
    const param = validLanguage;
    const result = validateLanguage(param);
    expect(result.error).not.toBeDefined();
  });

  test('should throw an error for invalid language', () => {
    const param = invalidLanguage;
    const result = validateLanguage(param);
    expect(result.error).toBeDefined();
    expect(result.error.message).toContain('"value" must be one of [en, es, de, fr, it, zh-hans, zh-hant]');
  });
});
