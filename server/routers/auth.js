const router = require('express').Router();
// const mysql = require("mysql2");
const Joi = require('@hapi/joi');
const dotenv = require('dotenv');
dotenv.config();

// const connection = require('../database/connectDB');

const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email()
});


router.post('/register', function (req, res) {

    const validation = schema.validate(req.body);
    res.send(validation);

    // try{
    //     connection.query(
    //         `INSERT INTO users (username, password, email) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}');`,
    //         function(err, results) {
    //             if (err.errno === 1062) {
    //                 res.status(400).send("dublbcate username");
    //             }
    //             console.log(err.errno);
    //             console.log(results); // собственно данные
    //         }
    //     );
    // }
    // catch(err){
    //     res.status(400).send(err);
    // }
  })

module.exports = router;