const express = require("express");
const config = require("./config/config");
const database = require("./config/database");
const bodyParser = require("body-parser");
const Sequelize = require('sequelize')

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/api", authRoutes);

// Sync the model with the database
// database
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synchronized");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing database:", error);
//   });

const port = config.port;
app.listen(port, () => {
  console.log("server is running on port :", port);
});
