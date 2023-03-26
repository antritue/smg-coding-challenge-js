module.exports.getIngredients = (drink) => {
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
    return ingredients
};