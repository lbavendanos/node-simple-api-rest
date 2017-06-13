'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// crea schema
let listSchema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: String, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }    
});

// crea model en base a un schema
let List = mongoose.model('List', listSchema);

module.exports = List;