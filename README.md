# SIMPLE API REST
Simple API REST con Express, MongoDB y autenticación con Token (JWT).
Renombrar archivo `.env.example` a `.env` y establecer sus propias variables de entorno.

### RUTA WEB
| Verbo				| URI						| Acción
 ------------------ | --------------------------| ------------------
| POST				| /register					| register
| POST				| /login					| login

### RUTA API
| Verbo				| URI						| Acción
 ------------------ | --------------------------| ------------------
| GET				| /list						| index
| POST				| /list						| create
| GET				| /list/:id					| show
| PUT				| /list/:id					| update
| DELETE			| /list/:id					| destroy