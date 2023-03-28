const axios = require('axios');
const app = require('./index');
const { translate } = require('../utils/translate');

jest.mock('axios');

describe('handler', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    const endpoint = process.env.API_ENDPOINT;

    const drink = {
        strDrink: 'Sidecar Cocktail',
        strInstructions: 'Shake all ingredients with ice, strain into a cocktail glass, and serve.',
        strInstructionsDE: 'Alle Zutaten mit Eis schütteln, in ein Cocktailglas abseihen und servieren.',
        strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ewjxui1504820428.jpg',
        strIngredient1: 'Brandy',
        strIngredient2: 'Triple sec',
        strMeasure1: '1 oz ',
        strMeasure2: '1\/2 oz ',
    };

    const expectedIngredients = [
        {
            name: 'Brandy', 
            measure: '1 oz ', 
            image: 'https://www.thecocktaildb.com/images/ingredients/brandy.png',
        }, 
        { 
            name: 'Triple sec', 
            measure: '1\/2 oz ', 
            image: 'https://www.thecocktaildb.com/images/ingredients/triple%20sec.png', 
        },
    ];

    test('returns a random drink with no specified language parameter', async () => {
        axios.get.mockResolvedValue({ data: { drinks: [drink] } });

        const event = {};
        const response = await app.handler(event);
        expect(axios.get).toHaveBeenCalledWith(endpoint);
        expect(response.statusCode).toEqual(200);

        const responseData = JSON.parse(response.body).data;
        expect(responseData.language).toEqual('en');
        expect(responseData.title).toEqual(drink.strDrink);
        expect(responseData.instructions).toEqual(translate(drink, 'en'));
        expect(responseData.image).toEqual(drink.strDrinkThumb);
        expect(responseData.ingredients).toEqual(expectedIngredients);
    });

    test('returns a random drink in the specified language', async () => {
        axios.get.mockResolvedValue({ data: { drinks: [drink] } });

        const event = { queryStringParameters: { language: 'de' } };
        const response = await app.handler(event);
        expect(axios.get).toHaveBeenCalledWith(endpoint);
        expect(response.statusCode).toEqual(200);

        const responseData = JSON.parse(response.body).data;
        expect(responseData.language).toEqual('de');
        expect(responseData.title).toEqual(drink.strDrink);
        expect(responseData.instructions).toEqual(translate(drink, 'de'));
        expect(responseData.image).toEqual(drink.strDrinkThumb);
        expect(responseData.ingredients).toEqual(expectedIngredients);
    });

    test('returns an error message for an invalid language', async () => {
        const event = { queryStringParameters: { language: 'invalid' } };

        const response = await app.handler(event);
        expect(response.statusCode).toEqual(400);

        const responseBody = JSON.parse(response.body);
        expect(responseBody.error).toContain('"value" must be one of [en, es, de, fr, it, zh-hans, zh-hant]');
    });

    test('returns an error message when the API request fails', async () => {
        axios.get.mockRejectedValue(new Error('API request failed'));

        const event = {};
        const response = await app.handler(event);
        expect(axios.get).toHaveBeenCalledWith(endpoint);
        expect(response.statusCode).toEqual(500);

        const responseBody = JSON.parse(response.body);
        expect(responseBody.error).toEqual('API request failed');
    });
});
