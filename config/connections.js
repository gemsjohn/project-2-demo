const Sequelize = require("sequelize");

// send config to .env to get the db connection variables
require("dotenv").config();

// use a variable that can be reassigned (ie let)
let sequelize;
// if statement to use Heroku JawsDB or local if not on Heroku
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
}

module.exports = sequelize;
