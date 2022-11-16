const getService = require("../services/api_endpoint");
const circularJSON = require("circular-json");

// Controller for getting data from API
const getFilms = async (req, res) => {
  const respond = await getService();
  let json = circularJSON.stringify(respond);
  res.json(json);
};

module.exports = { getFilms };
