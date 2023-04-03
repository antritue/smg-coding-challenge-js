const { validateLanguage } = require('./index');

describe('validateLanguage', () => {
  const invalidLanguage = 'invalid';

  const languages = ['en', 'es', 'de', 'fr', 'it', 'zh-hans', 'zh-hant'];

  test.each(languages)('should not throw an error for valid language: %s', (param) => {
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
