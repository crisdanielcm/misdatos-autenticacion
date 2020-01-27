const jwt = require('jsonwebtoken');

//==============================
//Verificar  token
//==============================
exports.verifyToken = (req, res, next) => {

    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decode) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        req.user = decode.user;
        next();
    });

}