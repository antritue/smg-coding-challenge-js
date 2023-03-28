# SMG technical test

## Overview

This is a serverless application that retrieves a random cocktail recipe and returns the details in a JSON response. The application is built using Node.js, AWS Lambda, API Gateway, and the Serverless Framework.

## API Reference

### GET /random-cocktail

Returns a random cocktail recipe.

#### Request Parameters


| Parameter | Type   | Required | Default | Description                                                              |
| ----------- | -------- | ---------- | --------- | -------------------------------------------------------------------------- |
| language  | String | No       | en      | The language code must be one of [en, es, de, fr, it, zh-hans, zh-hant]. |

#### Response

**Success Response (200 OK)**

Returns a JSON object with the following properties:

```json
{
	"message": "Successfully retrieved drink",
	"data": {
		"language": "en",
		"title": "Kentucky Colonel",
		"instructions": "In a shaker half-filled with ice cubes combine the courbon and Benedictine. Shake and strain into a cocktail glass. Garnish with the lemon twist.",
		"image": "https://www.thecocktaildb.com/images/media/drink/utqwpu1478820348.jpg",
		"ingredients": [
			{
				"name": "Bourbon",
				"measure": "3 oz ",
				"image": "https://www.thecocktaildb.com/images/ingredients/bourbon.png"
			},
			{
				"name": "Benedictine",
				"measure": "1/2 oz ",
				"image": "https://www.thecocktaildb.com/images/ingredients/benedictine.png"
			},
			{
				"name": "Lemon peel",
				"measure": "1 twist of ",
				"image": "https://www.thecocktaildb.com/images/ingredients/lemon%20peel.png"
			}
		]
	}
}

```

**Client Error (400 Bad Request)**

If the language parameter is invalid or not one of the allowed values, the API will return a 400 Bad Request response with an error message in the body.

```json
{
	"error": "\"value\" must be one of [en, es, de, fr, it, zh-hans, zh-hant]"
}
```

**Server Error (500 Internal Server Error)**

If there is an internal server error while processing the request, the API will return a 500 Internal Server Error response with an error message in the body.

```json
{
	"error": "Something went wrong while processing your request."
}
```

## Local Development

Clone the project

```bash
  git@github.com:antritue/smg-coding-challenge-js.git
```

Go to the project directory

```bash
  cd smg-coding-challenge-js
```

Install dependencies

```bash
  npm install
```

Start the local server

```bash
  npm start
```

Make a request to the local API:

```bash
  curl http://localhost:3000/random-cocktail
```

## Running Tests

To run tests, open another terminal, run the following command

```bash
  npm run test
```

## Deployment

To deploy this project you need to setup aws credentials (`aws_access_key_id` and `aws_secret_access_key`). Use [this link](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html) as reference

Choose your `region` in `serverless.yml`

```bash
  provider:
    name: aws
    runtime: nodejs18.x
    stage: dev
    region: ap-southeast-1
```

Run this command

```bash
  npm run deploy
```

Application is avalable to test via this API endpoint: https://j4q650kt17.execute-api.ap-southeast-1.amazonaws.com/random-cocktail

## Reference

- [AWS Lambda Functions with Serverless Framework](https://www.serverless.com/framework/docs/providers/aws/guide/functionshttps:/)
- [Cocktail public API](https://www.thecocktaildb.com/api.phphttps://https://www.thecocktaildb.com/api.ph)
- [ASCII table](https://www.rapidtables.com/code/text/ascii-table.htmlhttps:/)
- [Jest](https://jestjs.io/docs/getting-startedhttps:/) for testing
- [Joi](https://joi.dev/api/?v=17.8.3) for validation
