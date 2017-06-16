'use strict';

const User = require('./../models/user'),
    jwtService = require('./../services/jwt.service');

class UserController {

    constructor(){}

    // registrar
    register(req, res){

        let params = req.body;
        let user = new User(params);

        user.save((err, userStore) => {
            // captura error
            if(err){
                return res.status(500)
                            .json({ error: `Error al registrar usuario: ${err}` });
            }

            res.status(200)
                .json({ message: 'Usuario registrado', token: jwtService.encodeToken(userStore), userStore });
        });
    }

    // iniciar sesión
    login(req, res){

        let params = req.body;

        User.findOne({ email: params.email }, (err, user) => {
            // captura error
            if(err) return res.status(500).json({ message: `Email incorrecto: ${err}` });
            if(!user) return res.status(404).json({ message: 'Email incorrecto' });

            // verificar password
            if(!user.comparePassword(params.password)) return res.status(404).json({ message: 'Password incorrecto' });
            
            res.status(200)
                .json({ message: 'Usuario logueado', token: jwtService.encodeToken(user), user });
        });
    }

}

module.exports = UserController;