const getAllStarwarsPeople = require("../services/api_endpoint");
const circularJSON = require("circular-json");

// Controller for getting data from API
const getFilms = async (req, res) => {
  await getAllStarwarsPeople().then((s) => {
    res.send(circularJSON.stringify(s));
  });
  // let json = circularJSON.stringify(respond);
  // res.json(respond);
};

module.exports = { getFilms };
