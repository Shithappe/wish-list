
        
        // let data;
        
        //  connection.query("select * from wishs",
        //   function(err, results) {
          //     console.log(err);
          //     data = results;
          //     console.log(results); // собственно данные
          // });
          
          
          
          
          
          // app.get('/', (req, res) => {
            //   res.statusCode = 200;
            //   res.setHeader('Content-Type', 'text/plain');
            //   res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            //   res.end(JSON.stringify(data))
            // })
            
            
const express = require('express');
const app = express();

const mysql = require("mysql2");
const dotenv = require('dotenv');
const port = 8000;

dotenv.config();

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

const authRouter = require('./routers/auth.js');
app.use('/api/user', authRouter);

// const router = express.Router();

// router.get('/', function (req, res) {
//     res.send('hello world')
//   })

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`)
})
