const Authentication = require('../models/authentication.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    let body = req.body;

    Authentication.findByEmail(body.email, (err, userBD) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (!userBD) {
            return res.status(400).json({
                ok: false,
                message: "Usuario o contraseña incorrectos."
            });
        }
        if (!bcrypt.compareSync(body.password, userBD[0].password)) {
            return res.status(400).json({
                ok: false,
                message: "Usuario o contraseña incorrectos."
            })
        }

        let token = jwt.sign({
            user: userBD
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN })
        res.json({
            ok: true,
            user: userBD,
            token
        })

    });
}