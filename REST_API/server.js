//Importación librerías creadas



//Importación middlewares del proyecto
var express = require('express')
var cors = require('cors')
var morgan = require("morgan")
const { request, response } = require('express')

//Inicializar express para endpoint
var app = express()
var router = express.Router()

//parsing de las salidas
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//Middleware para log en la consola de las conexiones al endpoint
app.use(morgan("short"))

//Rutas del endpoint
app.use('/api/',require('./Config/routes/routes'))

//Declaración puerto funcionamiento
var portConnection = process.env.PORT || 5000
app.listen(portConnection, () => {
    console.log("El servidor se inicio en el puerto: "+portConnection);
})





