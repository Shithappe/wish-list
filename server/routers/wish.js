const router = require('express').Router();
const verify = require('./verifyToken');
const Joi = require('@hapi/joi');

const connection = require('../database/connectDB');

const wishSchema = Joi.object({
    name: Joi.string().required(),
    link: Joi.string(),
    price: Joi.string()
});

router.get('/', verify, (req, res) => {
    try{
        connection.query(
            `SELECT * FROM WISHS WHERE user_id = ${req.user._id};`,
            function(err, result) {
                if (!err) {
                    res.status(201).send(result);
                }
            }
        );
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.post('/add', verify, (req, res) => {

    const validation = wishSchema.validate(req.body);
    if (validation.error) return res.status(422).send(validation.error.details[0].message);

    try{
        connection.query(
            `INSERT INTO wishs (name, link, price, user_id) VALUES ('${req.body.name}', '${req.body.link}', '${req.body.price}', '${req.user._id}');`,
            function(err) {
                if (!err) {
                    res.sendStatus(201);
                }
            }
        );
    }
    catch(err){
        res.status(400).send(err);
    }

})

module.exports = router