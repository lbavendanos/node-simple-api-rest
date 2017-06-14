'use strict';

const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    Schema = mongoose.Schema;

// crea schema
let userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, select: false },
    name: { type: String, required: true }
}, {
    // opcion timestamps
    timestamps: {
        createdAt: 'created_at',
        updatedAt:  'updated_at'
    }
});

// ejeuta middleware antes de guardar
userSchema.pre('save', (next) => {
    let user = this;

    // si no a modificado pasa al siguiente middleware
    if(!user.isModified('password')) return next();

    // genera salto
    bcrypt.genSalt(10, (err, salt) => {
        // captura error
        if(err) return next();

        // encripta password con el salto generado
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            // captura error
            if(err) return next();

            user.password = hash;
            next();
        });

    });
});

// crea model con el schema
let User = mongoose.model('User', userSchema);

module.exports = User;