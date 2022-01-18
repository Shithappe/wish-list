const express = require('express');
const app = express();

const port = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.json())


const authRouter = require('./routers/auth.js');
app.use('/api/user', authRouter);


app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`)
})
