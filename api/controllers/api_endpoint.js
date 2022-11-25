const p2 = require("../services/api_endpoint");
const circularJSON = require("circular-json");
const getMovieTitle = require("../services/movieServer");

// Controller for getting data from API
const getFilms = async (req, res) => {
  await p2().then((s) => {
    res.send(circularJSON.stringify(s));
  });
};

const getTitle = async (req, res) => {
  // console.log(req.body);
  // res.send("Hello");
  const titles = await getMovieTitle(req.body);

  return res.json(titles);
};

module.exports = { getFilms, getTitle };
