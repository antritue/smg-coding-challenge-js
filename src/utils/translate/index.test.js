const { translate } = require('./index.js');

const drink = {
  strInstructions: "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
  strInstructionsES: "Coloque todos los ingredientes en un vaso alto casi lleno de cubitos de hielo. Sacudir bien.",
  strInstructionsFR: null,
};

describe("translate function", () => {
  test("return the English instructions if language is 'en'", () => {
    const result = translate(drink, "en");
    expect(result).toBe(drink.strInstructions);
  });

  test("return the instructions in the specified language if available", () => {
    const result = translate(drink, "es");
    expect(result).toBe(drink.strInstructionsES);
  });

  test("returns random words for unsupported languages", () => {
    const result = translate(drink, "fr");
    expect(result).toBeDefined();
  });
});
