const mysql = require("mysql2");
  
const fs = require('fs')

const data = fs.readFileSync('./init.sql', 'utf-8')
console.log(data)
// try {
// } catch (err) {
//   console.error(err)
// }

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "WishList",
  password: "1234"
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

 connection.query("select * from wishs",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    console.log(fields); // мета-данные полей 
});