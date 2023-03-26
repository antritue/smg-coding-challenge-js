const { translate } = require("../translate");
const { generateRandomString } = require("../generateRandomString");

const mockInstructions = {
  strInstructions: "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
  strInstructionsES: "Coloque todos los ingredientes en un vaso alto casi lleno de cubitos de hielo. Sacudir bien.",
  strInstructionsFR: null,
};

describe("translate function", () => {
  test("should return the English instructions if language is 'en'", () => {
    const result = translate(mockInstructions, "en");
    expect(result).toBe(mockInstructions.strInstructions);
  });

  test("should return the instructions in the specified language if available", () => {
    const result = translate(mockInstructions, "es");
    expect(result).toBe(mockInstructions.strInstructionsES);
  });

  test("should returns random words for unsupported languages", () => {
    const result = translate(mockInstructions, "fr");
    expect(result).not.toBe(mockInstructions.strInstructions);
  });
});
