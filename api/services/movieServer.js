const axios = require("axios");

// data source api url
const api = "https://swapi.py4e.com/api/people/";

// Service for making the api call
function getMovieTitle(val) {
  let titles = [];
  val.map((element) =>
    titles.push(
      axios(element).then((response) => response.data.title)

      // .catch((err) => console.log(err);
    )
  );

  return Promise.all(titles).then((results) => results);
}

module.exports = getMovieTitle;
