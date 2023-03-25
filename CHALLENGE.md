
## The Cocktail Challenge
You'll create an API that will return a random cocktail recipe, with
each of the ingredients translated to a fantasy language and enriched with
an image.

Request:
```
GET https://localhost:3000/random-cocktail?language=sith
```

Response:
```json
{
 "language": "en|sith|random",
 "title": "Name of the cocktail",
 "instructions": "How to mix the cocktail",
 "image": "Image of the cocktail",
 "ingredients": [
  {
    "name": "name of the ingredient",
    "measure": "how much is needed",
    "image": "https://link-to-ingredient-image.jpg"
  },
  [...]
 ]
}
```

**Requirements**:
1. Use [this public API](https://www.thecocktaildb.com/api/json/v1/1/random.php) to look up a random cocktail recipe.
2. Translate the recipe to the [Sith](https://starwars.fandom.com/wiki/Sith) language or another language
   of your choice.
   In case of an error in the translation, generate random strings between 3 and 15 characters for each word of the original recipe.
3. Find an image for each of the ingredients
   
**Hints**
* Optimise the code for performance: Respond as quickly as possible.
* If you feel comfortable, try to write the code in a test driven way.
* Test coverage should be > 80%.
* Tests may not invoke the real api, only mocks are allowed.
* Use [Axios](https://www.npmjs.com/package/axios) to perform API queries.

Enhancement if there's time:
* Add a query string parameter to specify one or more ingredients that the random cocktail must have.

## Getting started

### Local development

Opposed to Homegates real setup, where multiple stages are supported, this challenge is not ready for deployment, by choice.
We figure it would be too complicated to verify AWS skills in a coding challenge.
So this project does not 'run', apart from the unit tests. The exposed handler code will run as API
Gateway handler with our setup.

### Recommended

- VS Code Eslint extension: dbaeumer.vscode-eslint
  It will automatically run `yarn fix` whenever you save the file.

## Public Yarn commands

- `yarn lint` = validates all the files both in **app** and **cdk** folders
- `yarn lint:fix` = makes the best effort attempt to fix all the issues
- `yarn test` = runs unit tests for **app** and **cdk** modules

