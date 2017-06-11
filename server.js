'use strict';

const express = require('express'),
      bodyParse = require('body-parser'),
      api = require('./src/routes/api.route');

// configura puerto
const port = process.env.PORT || 3000; 
const app = express();

// configura la app para utilizar body-parse
// esto nos permitirá obtener los datos de un POST
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

// configura rutas
app.use('/api', api);

app.listen(port, function () {
  console.log(`Corriendo REST API en el puerto ${port}! http://localhost:${port}`);
});