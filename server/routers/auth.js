const router = require('express').Router();
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');    
const dotenv = require('dotenv');
dotenv.config();

const connection = require('../database/connectDB');

const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email()
});

const loginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});


router.post('/register', async function (req, res) {
    console.log(req.body)

    const validation = schema.validate(req.body);
    if (validation.error) return res.status(420).send(validation.error.details[0].message);

    try{
        const salt = await bcrypt.genSaltSync(10);
        hashPassword = await bcrypt.hash(req.body.password, salt);

        connection.query(
            `INSERT INTO users (username, password, email) VALUES ('${req.body.username}', '${hashPassword}', '${req.body.email}');`,
            function(err) {
                if (!err) {
                    res.sendStatus(201);
                }
                else {
                    err.errno === 1062 && res.status(400).send("user already exist");
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

    const validation = loginSchema.validate(req.body);
    if (validation.error) return res.status(422).send(validation.error.details[0].message);

    try{
        connection.query(
            `SELECT * FROM users WHERE email = '${req.body.email}';`,
            function(err, results) {
                if (!err) {
                    if (results.length === 0) res.status(401).send({email: 'Wrong email'});
                    else{
                        const validPass = bcrypt.compareSync(req.body.password, results[0].password);
                        if (!validPass) return res.status(401).send({password: 'Invalid password'});

                        const token = jwt.sign({ _id: results[0].id}, process.env.SECRET_TOKEN);
                        res.header('Authorization', token).send({ id: results[0].id, token: token});
                    }
                    
                }
            }
        );
    }
    catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;