const axios = require("axios");
const { getIngredients } = require("../utils/getIngredients");
const { translate } = require("../utils/translate");
const {validateLanguage} = require("../utils/validator");

module.exports.handler = async (event) => {
  const language = event.queryStringParameters?.language || "en";
  //validate language parameter, must be one of [en, es, de, fr, it, zh-hans, zh-hant]
  const { error } = validateLanguage(language);
  if (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message })
    };
  }

  try {
    //get a random drink from the cocktail api
    const response = await axios.get(process.env.API_ENDPOINT);
    const drink = response.data.drinks[0];

    const responseValue = {
      language,
      title: drink.strDrink,
      instructions: translate(drink, language),
      image: drink.strDrinkThumb,
      ingredients: getIngredients(drink),
    }

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Successfully retrieved drink",
          data: responseValue,
        }
      ),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          error: error.message,
        }
      ),
    };
  }
};
