'use strict';

const jwt = require('jwt-simple'),
    moment = require('moment'),
    appConfig = require('./../config/app');

    function encodeToken(user){
        let payload = {
            sub: user._id,
            iat: moment().unix(), // fecha de creacion
            exp: moment().add(14, 'days').unix() // fecha de expiracion
        }

        return jwt.encode(payload, appConfig.TOKEN_SECRET);
    }

    function decodeToken(token){
        return new Promise((resolve, reject) => {
            try{
                let payload = jwt.decode(token, appConfig.TOKEN_SECRET);

                // verificar expiración del token
                if(payload.exp <= moment().unix()){
                    reject({ status: 401, message: 'Token a expirado' });  
                }

                resolve(payload.sub);

            }catch(err){
                reject({
                    status: 500,
                    message: 'Token inválido'
                });
            }
        });
    }


module.exports = {
    encodeToken,
    decodeToken
};