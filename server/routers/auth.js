const router = require('express').Router();
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const connection = require('../database/connectDB');

const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email()
});


router.post('/register', function (req, res) {

    const validation = schema.validate(req.body);
    if (validation.error) {
        res.status(422).send(validation.error.details[0].message);
    }

    try{
        const salt = bcrypt.genSaltSync(10);
        hashPassword = bcrypt.hash(req.body.password, salt);

        connection.query(
            `INSERT INTO users (username, password, email) VALUES ('${req.body.username}', '${hashPassword}', '${req.body.email}');`,
            function(err) {
                if (!err) {
                    res.sendStatus(201);
                }
                else {
                    err.errno === 1062 && res.status(400).send("username already exist");
                    console.log(err);
                }
            }
        );
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.post('/login', function (req, res) {

    const validation = schema.validate(req.body);
    if (validation.error) {
        res.status(422).send(validation.error.details[0].message);
    }

    try{
        connection.query(
            `INSERT INTO users (username, password, email) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}');`,
            function(err, results) {
                if (!err) {
                    res.sendStatus(201);
                }
                else {
                    err.errno === 1062 && res.status(400).send("username already exist");
                    console.log(err);
                }
               
                console.log(results); // собственно данные
            }
        );
    }
    catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;