console.log("Inicio del aplicativo")


const librosWebService = require('./librosWebService')
const Libro = require('./Libro')

var express = require('express')
var cors = require('cors')
const { request } = require('express')

var app = express()
var router = express.Router()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use('/API',router)

//Listar todos los libros
router.route('/libros').get((request, response) => {
    librosWebService.getLibros().then(result => {
        response.json(result[0])
    })
})

//Listar un solo libro
router.route('/libros/:idLibro').get((request, response) => {
    librosWebService.getLibro(request.params.idLibro).then(result => {
        response.json(result[0])
    })
})


//Insertar un libro en la BD
router.route('/libros').post((request, response) => {
    let Libro = {...request.body}
    librosWebService.newLibro(Libro).then(result => {
        response.json(result[0])
    },(error) => {
        console.log(error.message)
        response.json(error.message)
    })
})

//Actualizar un libro en la BD
router.route('/libros').put((request, response) => {
    let Libro = {...request.body}
    librosWebService.putLibro(Libro).then(result => {
        response.json(result[0])
    },(error) => {
        console.log(error.message)
        response.json(error.message)
    })
})

//Eliminar un libro en la BD
router.route('/libros').delete((request, response) => {
    let Libro = {...request.body}
    librosWebService.deleteLibro(Libro).then(result => {
        response.json(result[0])
    },(error) => {
        console.log(error.message)
        response.json(error.message)
    })
})



var portConnection = process.env.PORT || 5000
app.listen(portConnection)

console.log('Fin del aplicativo')