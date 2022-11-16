const axios = require("axios");

// data source api url
const api = "https://swapi.py4e.com/api/films";

// Service for making the api call
async function getService() {
  return axios.get(api);
}
module.exports = getService;
