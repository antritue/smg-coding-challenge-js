const { getIngredients } = require('./index.js');

describe('getIngredients', () => {
    test('returns an array of ingredients', () => {
        const drink = {
            strIngredient1: 'Gin',
            strMeasure1: '2 oz',
            strIngredient2: 'Tonic water',
            strMeasure2: '4 oz',
        };
        const expected = [
            {
                name: 'Gin',
                measure: '2 oz',
                image: 'https://www.thecocktaildb.com/images/ingredients/gin.png',
            },
            {
                name: 'Tonic water',
                measure: '4 oz',
                image: 'https://www.thecocktaildb.com/images/ingredients/tonic%20water.png',
            },
        ];
        expect(getIngredients(drink)).toEqual(expected);
    });

    test('ignores null ingredients', () => {
        const drink = {
            strIngredient1: 'Gin',
            strMeasure1: '2 oz',
            strIngredient2: 'Tonic water',
            strMeasure2: '4 oz',
            strIngredient3: null,
            strMeasure3: null,
        };
        const expected = [
            {
                name: 'Gin',
                measure: '2 oz',
                image: 'https://www.thecocktaildb.com/images/ingredients/gin.png',
            },
            {
                name: 'Tonic water',
                measure: '4 oz',
                image: 'https://www.thecocktaildb.com/images/ingredients/tonic%20water.png',
            },
        ];
        expect(getIngredients(drink)).toEqual(expected);
    });

    test('returns an array of ingredients with measure of null', () => {
        const drink = {
            strIngredient1: 'Gin',
            strMeasure1: '2 oz',
            strIngredient2: 'Tonic water',
            strMeasure2: '4 oz',
            strIngredient3: 'Light rum',
            strMeasure3: null,
        };
        const expected = [
            {
                name: 'Gin',
                measure: '2 oz',
                image: 'https://www.thecocktaildb.com/images/ingredients/gin.png',
            },
            {
                name: 'Tonic water',
                measure: '4 oz',
                image: 'https://www.thecocktaildb.com/images/ingredients/tonic%20water.png',
            },
            {
                name: 'Light rum',
                measure: null,
                image: 'https://www.thecocktaildb.com/images/ingredients/light%20rum.png',
            },
        ];
        expect(getIngredients(drink)).toEqual(expected);
    });
});
