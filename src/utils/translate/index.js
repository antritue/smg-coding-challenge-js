const { generateRandomString } = require("../generateRandomString");

module.exports.translate = (drink, language) => {
    if (language === 'en') {
        return drink.strInstructions
    }
    else {
        const field = `strInstructions${language.toUpperCase()}`;
        const instructions = drink[field];
        
        if (instructions) {
            return instructions;
        } else {
            const words = drink.strInstructions.split(" ");
            const randomWords = words.map(() =>
                generateRandomString()
            );
            return randomWords.join(" ");
        }
    }
};