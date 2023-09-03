# Pet shop UI
This application is part of a dice challenge in which a UI implementation is carried out based on a wireframe provided and various integrations with a PetShop API test are performed.

This application was developed with Vue.js, and the first two provided user stories were implemented, which are the home page and the login journey.
## Project Setup
You can perform the installation in a local environment or through Docker.

### Local environment
```
npm install
```

### Compile and Hot-Reload for Development

```
npm run dev
```

### Type-Check, Compile and Minify for Production

```
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```
npm run test:unit
```


## Docker installation

If you haven't installed Docker and Docker Compose yet, follow these links for installation instructions:

- [Docker][1]
- [Docker compose][2]

[1]: https://docs.docker.com/get-docker/
[2]: https://docs.docker.com/compose/install/

## Build and run the container
Make sure you are in the project root directory and execute the following instructions on a terminal.

## For development environment

```
docker-compose up
```

This will build the Docker image, start the container and make the front-end available at http://localhost:5173/.

## Additional notes
The command docker -v should return the installed Docker version.
The command docker-compose -v should return the installed Docker Compose version.


## Main dependencies
- [Vue.js: JavaScript framework used to build the application.][3]
- [Pinia: library used for managing the global state of the application.][4]
- [Vue Router: library used for managing routes and navigation in the application.][5]
- [Axios: library used for making HTTP requests.][6]
- [Vee-validate: library used for form validation.][7]
- [Vuetify: Open Source UI Library.][8]

[3]: https://vuejs.org/guide/quick-start.html
[4]: https://pinia.vuejs.org/getting-started.html
[5]: https://router.vuejs.org/installation.html
[6]: https://axios-http.com/es/docs/intro
[7]: https://vee-validate.logaretm.com/v4/guide/overview/
[8]: https://vuetifyjs.com/en/

## Architecture Design
The file system is distributed as follows.

- src/
  - api/ (Where the axios instance is created and interceptors are set to use in the requests, in case, for example, a bearer token is needed.)
  - assets/ (Where the static files to be compiled and the custom styles of the application are located.)
  - components/ (Where the reusable Vue.js components are located.)
  - composables/ (Where the composable functions are located, used to encapsulate logic that can be used in different views.)
  - interfaces/ (Where the TypeScript interfaces created for typing are located.)
  - layouts/ (Where the application layouts are located, where routers containing child routes are rendered.)
  - plugins/ (Where the configurations of the plugins used in the application are located.)
  - router/ (Where the configuration of the different routes to be used in the application is located, and where guards and functionalities to apply in each navigation would be placed.)
  - stores/ (Where the stores of the different modules of the application are located.)
  - views/ (Where the views to be rendered on each route are located and where the logic is executed to later distribute it to child components.)
- App.vue (Root component.)
- main.ts (Entry point of the application.)
- vite.config.js: (Vite configuration for building the application.)
- Dockerfile: (Docker configuration file for creating a Docker image of your application.)
- docker-compose.yml: (Docker Compose configuration file for managing Docker containers.)
- .env (Project environment variables)
- package.json (Project dependencies and configuration)
- .gitignore (Files and folders to ignore in Git)
- README.md (Project documentation)

## Usage
Once logged into the application, you should be able to see a home page view where a top navigation bar is displayed. This navigation bar contains different navigation links, which currently only have mocked route addresses. Therefore, navigation is possible but leads to empty pages.

Additionally, there is an option to Login, which opens a modal that allows the user to either log in to the application or sign up. Upon either of these selections, the user is ultimately logged into the application, and a logout button and an avatar with a mocked image appear. Clicking on this avatar should allow you to view the user's details.

Furthermore, the home view includes a promotions carousel and options for available blogs.

Additionally, sliders for the top five products in two random categories are displayed. Clicking on the category title navigates to the category's page where the product listing should be (currently a mocked route). Clicking on the product leads to the details of that product (currently a mocked route).

## Disclaimer
The handling of calls to the different endpoints was done in two ways (composable functions and Pinia actions) for the purpose of demonstrating different ways to access the information.

The .env file is uploaded to Git only for the purpose of demonstrating its use in this challenge.

### Currency formatter package
In order to use the currency formatter, you need to follow these steps
## Installation

You can install this package as a local dependency using the provided TGZ file.

1. In your project, run: `npm install .\currency-formatter-2.0.0.tgz`

## Usage

```vue
<template>
  <currency-formatter />
</template>

<script>
import CurrencyFormatter from 'currency-formatter';

export default {
  components: {
    CurrencyFormatter,
  },
};
</script>
```

Then, in the component with the data to parse, you will need to add a function as following to use the store from the currency-formatter and transform the data
```
const formattedPrice = ((price: number) => {
  const exchangeRate = currencyStore.getExchangeRate(currencyStore.selectedCurrency)
  return (price * exchangeRate).toFixed(2)
})