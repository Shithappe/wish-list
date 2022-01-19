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
    res.status(200).send('haцher');
    console.log(req.user._id);
});

router.post('/add', verify, (req, res) => {

    console.log(req.body);
    const validation = wishSchema.validate(req.body);
    if (validation.error) return res.status(422).send(validation.error.details[0].message);

    try{
        connection.query(
            `INSERT INTO wishs (name, link, price) VALUES ('${req.body.name}', '${req.body.link}', '${req.body.price}');`,
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