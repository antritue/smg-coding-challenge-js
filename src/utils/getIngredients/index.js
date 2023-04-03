module.exports.getIngredients = (drink) => {
    //get a list of ingredients of a drink
    const ingredients = [];
    let i = 1
    while(drink[`strIngredient${i}`]){
        const ingredientName = drink[`strIngredient${i}`];
        const ingredientMeasure = drink[`strMeasure${i}`];
        //replace white space between name of ingredient with %20
        const ingredientNameParameter = encodeURIComponent(ingredientName.toLowerCase())

        ingredients.push({
            name: ingredientName,
            measure: ingredientMeasure,
            image: `https://www.thecocktaildb.com/images/ingredients/${ingredientNameParameter}.png`,
        })
        i++
    }
    return ingredients
};