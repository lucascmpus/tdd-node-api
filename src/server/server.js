const express = require("express");
const cors = require("cors");
const routes = require("./router/router.js");

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3030, function () {
  console.log("Server running");
});
