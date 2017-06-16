'use strict';

const express = require('express'),
      mongoose = require('mongoose'),
      bodyParse = require('body-parser'),
      morgan = require('morgan'),
      appConfig = require('./src/config/app'),
      appDataBase = require('./src/config/database'),
      webRoute = require('./src/routes/web.route'),
      apiRoute = require('./src/routes/api.route');

// cargar variables de entorno
require('dotenv').config();

const app = express();

// configura la app para utilizar body-parse
// esto permitirá obtener los datos de un POST
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

// morgan para log requests en la consola
app.use(morgan(appConfig.MORGAN_FORMAT));

// configura rutas
app.use('/', webRoute);
app.use('/api', apiRoute);

// configura tipo de promesa para MongoDB
mongoose.Promise = global.Promise;
// conecta MongoDB
mongoose.connect(appDataBase.DB_URL, appDataBase.DB_OPTION, (err) => {
  // captura error
  if(err){
    return console.error('Error en la conección de la BD:', err);
  }

  console.log('MongoDB run!!');
  // ejecuta servidor
  app.listen(appConfig.EXPRESS_PORT, function () {
    console.log(`Corriendo REST API en el puerto ${appConfig.EXPRESS_PORT}! http://localhost:${appConfig.EXPRESS_PORT}`);
  });
});
