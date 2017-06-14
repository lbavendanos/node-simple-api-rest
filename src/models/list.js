'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// crea schema
let listSchema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: String, default: 0 }    
}, {
    // opcion timestamps
    timestamps: {
        createdAt: 'created_at',
        updatedAt:  'updated_at'
    }
});

// crea model con el schema
let List = mongoose.model('List', listSchema);

module.exports = List;