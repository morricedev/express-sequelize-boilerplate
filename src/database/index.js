const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");

const Home = require("../models/Home");

const models = [Home];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

module.exports = connection;
