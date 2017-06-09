'use strict';

let express = require('express'),
    bodyParse = require('body-parser');

// Configurar puerto
let port = process.env.PORT || 3000; 
const app = express();

// Configurar la app para utilizar body-parse
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

// Ruta de ejemplo: Hello World
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Corriendo REST API en el puerto ${port}! http://localhost:${port}`);
});