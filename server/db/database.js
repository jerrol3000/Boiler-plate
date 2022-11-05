const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE || 'postgres://localhost:5432/DATABASE_NAME', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

module.exports = db;
