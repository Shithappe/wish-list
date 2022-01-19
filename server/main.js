const express = require('express');
const app = express();
var cors = require('cors');

const port = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.json())

var allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

const authRouter = require('./routers/auth.js');
app.use('/api/user', authRouter);

const wishRouter = require('./routers/wish.js');
app.use('/api/wish', wishRouter);


app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`)
})
