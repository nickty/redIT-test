const axios = require("axios");

// data source api url
const api = "https://swapi.py4e.com/api/people/";

// Service for making the api call
async function getService() {
  return axios.get(api);
}
module.exports = getService;
