'use strict';

const express = require('express'),
      mongoose = require('mongoose'),
      bodyParse = require('body-parser'),
      morgan = require('morgan'),
      config = require('./config'),
      api = require('./src/routes/api.route');

const app = express();

// configura la app para utilizar body-parse
// esto permitirá obtener los datos de un POST
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

// morgan para log requests en la consola
app.use(morgan(config.MORGAN_FORMAT));

// configura rutas
app.use('/api', api);

// configura tipo de promesa para MongoDB
mongoose.Promise = global.Promise;
// conecta MongoDB
mongoose.connect(config.MONGO_DB_URL, (err) => {
  // captura error
  if(err){
    return console.error('Error en la conección de la BD:', err);
  }

  console.log('MongoDB run!!');
  // ejecuta servidor
  app.listen(config.PORT_EXPRESS, function () {
    console.log(`Corriendo REST API en el puerto ${config.PORT_EXPRESS}! http://localhost:${config.PORT_EXPRESS}`);
  });
});
