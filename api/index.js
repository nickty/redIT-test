const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { getFilms, getTitle } = require("./controllers/api_endpoint");

// parse application/json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for getting all films data
app.get("/api/v1/people", getFilms);

// get movie title for each people
app.post("/api/v1/movie", getTitle);

const port = 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
