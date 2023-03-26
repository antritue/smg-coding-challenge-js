const axios = require("axios");
const { getIngredients } = require("../utils/getIngredients");
const { translate } = require("../utils/translate");

module.exports.handler = async (event) => {
  const language = event.queryStringParameters?.language || "en";
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  try {
    //get a random drink from the cocktail api
    const response = await axios.get(url);
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
          message: "Internal server error",
          error: error.message,
        }
      ),
    };
  }
};
