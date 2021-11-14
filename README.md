# Travel Advisor App

##### Visit [travel-advisor-demo.netlify.app](travel-advisor-demo.netlify.app)

This advanced application helps you to find Restaurants, Hotels, and Attractions.

Accomplished by using:

- [Google Maps](https://maps.google.com/)
- [GoogleMapsApis](https://console.cloud.google.com/google/maps-apis/)
- [RapidAPI "Travel-Advisor-Api"](https://rapidapi.com/apidojo/api/travel-advisor/)
- [Geolocation](https://developers.google.com/maps/documentation/javascript/geolocation).

### Features:

- Starting with places around your location. Or you can pick the location by moving the map yourself.
- Select your choices from the options menu and you will get the places with a lot of details (address, average prices ... etc).
- Including Links to the place website and Tripadvisor reviews.

### Setup:

- You will need to setup `npm` or `yarn`.
- Downlonad the project `git clone https://github.com/ZakyAly/travel-advisor-app.git`
- In the project directory, you can run `npm install` or `yarn install`.
- Create `.env` file with your own API keys

  - `REACT_APP_GOOGLE_MAPS_API_KEY= put your APIkey here`
  - `REACT_APP_RAPIDAPI_KEY= put your APIkey here`

- Start the development mode by `npm start` or `yarn run`

### Known Bugs:

- RapidAPI is broken after a few minutes of running the project!

### ToDo:

- Finishing the 'Search' feature, the user can choose between cities around the world by typing the city name in the search box.
- Choose the place on the map, the user can select the place on the map and it will show the place details in a list of places.
- RapidAPI should be replaced with another one with better performance.
- Complete the getWeather feature.
