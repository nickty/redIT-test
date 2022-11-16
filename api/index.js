// app variable in containing the express app with initially invoked.
const app = require("express")();

const { getFilms } = require("./controllers/api_endpoint");

// Route for getting all films data
app.get("/api/v1/films", getFilms);

const port = 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
