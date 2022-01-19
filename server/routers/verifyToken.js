const jwt = require('jsonwebtoken'); 

function auth (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.sendStatus(401);

    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN);
        return verified; //its user_id
    }catch{
        res.status(400).send('Invalid token');
        return 0;
    }
}

module.exports = auth