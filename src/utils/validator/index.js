const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload);

const languageSchema = Joi.string().insensitive().valid('en', 'es', 'de', 'fr', 'it', 'zh-hans', 'zh-hant');

module.exports.validateLanguage = validator(languageSchema);