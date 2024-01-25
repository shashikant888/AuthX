const { Sequelize } = require('sequelize');
const config = require('./config');
require('dotenv').config();

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging : false
});

// Test the connection
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection to the database has been established successfully.');
//     })
//     .catch((err) => {
//         console.error('Unable to connect to the database:', err);
//     });

module.exports = sequelize;
