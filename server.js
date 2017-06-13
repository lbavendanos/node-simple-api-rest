'use strict';

const express = require('express'),
      mongoose = require('mongoose'),
      bodyParse = require('body-parser'),
      api = require('./src/routes/api.route');

// configura MongoDB
const DB_NAME = 'api';
const DB_URL = `mongodb://localhost:27017/${DB_NAME}`;

// configura puerto
const PORT = process.env.PORT || 3000; 

const app = express();

// configura la app para utilizar body-parse
// esto permitirá obtener los datos de un POST
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

// configura rutas
app.use('/api', api);

// configura tipo de promesa para MongoDB
mongoose.Promise = global.Promise;
// conecta MongoDB
mongoose.connect(DB_URL, (err) => {
  // captura error
  if(err){
    return console.error('Error en la conección de la BD:', err);
  }

  console.log('MongoDB run!!');
  // ejecuta servidor
  app.listen(PORT, function () {
    console.log(`Corriendo REST API en el puerto ${PORT}! http://localhost:${PORT}`);
  });
});
