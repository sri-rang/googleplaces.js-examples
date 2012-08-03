var config = require("./config.js");

var GooglePlaces = require("googleplaces");
var googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);
var parameters;

/**
 * Text search - https://developers.google.com/places/documentation/#TextSearchRequests
 */
parameters = {
  query:"restaurants in dublin"
};
googlePlaces.textSearch(parameters, function (response) {
  console.log(response.results);
});