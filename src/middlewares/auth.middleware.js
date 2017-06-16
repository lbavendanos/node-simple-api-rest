'use strict';

const jwtService = require('./../services/jwt.service');

    function isAuth(req, res, next){

        // verificar si el header tiene el token
        if(!req.headers.authorization) return res.status(403).json({ message: 'No tienes autorización' });

        // obetener token del header
        let token = req.headers.authorization.split(' ')[1];

        // verificar si token es válido
        jwtService.decodeToken(token)
                    .then((response) => {
                        // guardar 'response' en el 'request' para su uso en otras rutas
                        req.user = response;

                        next();
                    })
                    .catch((error) => {
                        return res.status(error.status).json({ message: error.message });
                    });
    }

module.exports = isAuth;