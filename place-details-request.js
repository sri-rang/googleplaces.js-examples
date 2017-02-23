var config = require("./config.js");

var GooglePlaces = require("googleplaces");
var googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);
var parameters;

/**
 * Place details requests - https://developers.google.com/places/documentation/#PlaceDetails
 */
parameters = {
  location:[-33.8670522, 151.1957362],
  types:"doctor"
};
googlePlaces.placeSearch(parameters, function (error, response) {
  googlePlaces.placeDetailsRequest({reference:response.results[0].reference}, function (error, response) {
    console.log(response.result);
  });
});
