const axios = require("axios");
const { translate } = require("../utils/translate");

module.exports.handler = async (event) => {
  const language = event.queryStringParameters?.language || "en";
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  try {
    //get a random drink from the cocktail api
    const response = await axios.get(url);
    const drink = response.data.drinks[0];

    //get a list of ingredients of a drink
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredientName = drink[`strIngredient${i}`];
      if (!ingredientName) {
        break;
      }
      const ingredientMeasure = drink[`strMeasure${i}`];
      //replace white space between name of ingredient with %20
      const ingredientNameParameter = encodeURIComponent(ingredientName.trim().toLowerCase())

      ingredients.push({
        name: ingredientName,
        measure: ingredientMeasure,
        image: `https://www.thecocktaildb.com/images/ingredients/${ingredientNameParameter}.png`,
      })
    }

    const responseValue = {
      language,
      title: drink.strDrink,
      instructions: translate(drink, language),
      image: drink.strDrinkThumb,
      ingredients,
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
