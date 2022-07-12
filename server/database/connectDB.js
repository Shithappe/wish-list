const mysql = require("mysql2");
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  database: 'WishList',
  password: process.env.DB_PASSWORD,
});
 connection.connect(function(err){
    if (err) {
      return console.error("Error: " + err.message);
    }
    else{
      console.log("Connected to MySql");
    }
 });

module.exports = connection;