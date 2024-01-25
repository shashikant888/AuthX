const express = require("express");
const config = require("./config/config");
const database = require("./config/database");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
const requestLogger = require("./middlewares/requestLogger");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(requestLogger);

app.use(bodyParser.json());

app.use("/api", userRoutes);


app.use(errorHandler);
const port = config.port;

app.listen(port, () => {
  console.log("server is running on port :", port);
});
