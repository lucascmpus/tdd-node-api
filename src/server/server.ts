import express from "express";
import cors from "cors";
import routes from "./router/router";

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3030, function () {
  console.log("Server running");
});
