var config = require("./config.js");

var GooglePlaces = require("googleplaces");
var googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);
var parameters;

/**
 * Place search - https://developers.google.com/places/documentation/#PlaceSearchRequests
 */
parameters = {
  location:[-33.8670522, 151.1957362],
  types:"doctor"
};
googlePlaces.placeSearch(parameters, function (response) {
  console.log(response.results);
});