const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.status(200).send('haцher');
    console.log(req.user._id);
});

module.exports = router