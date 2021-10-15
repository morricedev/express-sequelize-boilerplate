const express = require("express");
const { resolve } = require("path");
const dotenv = require("dotenv");
dotenv.config();

const connection = require("./src/database");

const homeRoutes = require("./src/routes/home");

class App {
  constructor() {
    this.app = express();
    this.connectToDatabase();
    this.middlewares();
    this.routes();
  }

  connectToDatabase() {
    connection
      .authenticate()
      .then(() => console.log(`\x1b[32m[+]\x1b[0m Connected to database`))
      .catch((error) =>
        console.log(`\x1b[31m[-]\x1b[0m Error to connect on database: ${error}`)
      );
  }

  middlewares() {
    this.app.set("view engine", "ejs");
    this.app.use(express.static(resolve(__dirname, "public")));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
  }
}

module.exports = new App().app;
