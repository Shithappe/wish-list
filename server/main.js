const mysql = require("mysql2");

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

let data;

 connection.query("select * from wishs",
  function(err, results, fields) {
    console.log(err);
    data = results;
    console.log(results); // собственно данные
    console.log(fields); // мета-данные полей 
});




const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.end(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
