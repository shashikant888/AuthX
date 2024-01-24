require('dotenv').config();
module.exports = {
    port : process.env.PORT || 3000,
    apiBaseUrl: 'https://authx.com',
};