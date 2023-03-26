const { generateRandomString } = require("../generateRandomString");

module.exports.translate = (drink, language) => {
    if(language==='en'){
        return drink.strInstructions
    }
    const field = `strInstructions${language.toUpperCase()}`;
    const instructions = drink[field];
    if (instructions) {
        return instructions;
    } else {
        const words = drink.strInstructions.split(" ");
        const translatedWords = words.map((word) =>
            generateRandomString()
        );
        return translatedWords.join(" ");
    }
};