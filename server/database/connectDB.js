const mysql = require("mysql2");
const dotenv = require('dotenv');
dotenv.config();
  
// const fs = require('fs')
// const data = fs.readFileSync('./init.sql', 'utf-8')
// console.log(data)
// try {
// } catch (err) {
//   console.error(err)
// }

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  database: 'WishList',
  password: process.env.DB_PASSWORD
});
 connection.connect(function(err){
    if (err) {
      return console.error("Error: " + err.message);
    }
    else{
      console.log("Connected to MySql");
    }
 });

//  connection.query("select * from wishs",
//   function(err, results, fields) {
//     console.log(err);
//     console.log(results); // собственно данные
//     console.log(fields); // мета-данные полей 
// });

module.exports = connection;