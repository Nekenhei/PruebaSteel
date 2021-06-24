const librosWebService = require('../../app/Controller/librosWebService')
const Libro = require('../../app/Model/Libro')
const { Router } = require("express")
const router = Router()

//creacion respuesta por default
router.get('/', (request, response) => {
    response.json({"Respuesta:": "Endpoint Libros OK"})
})

//Listar todos los libros
router.get('/libros', (request, response) => {
    librosWebService.getLibros().then(result => {
        response.json(result[0])
    },(error) => {
        console.log(error.message)
        response.json(error.message)
    })
})

//Listar todos los autores
router.get('/Autores', (request, response) => {
    librosWebService.getAutores().then(result => {
        response.json(result[0])
    },(error) => {
        console.log(error.message)
        response.json(error.message)
    })
})

//Listar todos los libros
router.get('/Generos', (request, response) => {
    librosWebService.getGeneros().then(result => {
        response.json(result[0])
    },(error) => {
        console.log(error.message)
        response.json(error.message)
    })
})

//Listar todos los libros
router.get('/Editoriales', (request, response) => {
    librosWebService.getEditoriales().then(result => {
        response.json(result[0])
    },(error) => {
        console.log(error.message)
        response.json(error.message)
    })
})

//Listar un solo libro
router.get('/libros/:idLibro', (request, response) => {
    librosWebService.getLibro(request.params.idLibro).then(result => {
        response.json(result[0])
    },(error) => {
        console.log(error.message)
        response.json(error.message)
    })
})


//Insertar un libro en la BD
router.post('/libros', (request, response) => {
    let Libro = {...request.body}
    if(Libro.tituloLibro && Libro.a_oLibro && Libro.numPaginas && Libro.idEditorial && Libro.idAutor && Libro.idGenero){
        
        librosWebService.newLibro(Libro).then(result => {
            
            let respuestaDB = result[0]
            if(respuestaDB[0].response==0){
                response.json({"response": "No es posible registrar el libro, se alcanzó el maximo permitido"})
            }else{
                response.json({"response": "Libro registrado exitosamente","Id":respuestaDB[0].response})
            }
        },(error) => {
            console.log(Libro.tituloLibro);
            console.log(error.message)
            response.json(error.message)
        })
        //response.json(Libro.titulo)
    }else{
        response.json({"response": "Formulario incompleto"})
    }
})

//Actualizar un libro en la BD
router.put('/libros', (request, response) => {
    let Libro = {...request.body}
    
    if(Libro.idLibro && Libro.tituloLibro && Libro.a_oLibro && Libro.numPaginas && Libro.idEditorial && Libro.idAutor && Libro.idGenero){
        librosWebService.putLibro(Libro).then(result => {
            let respuestaDB = result[0]
            if(respuestaDB[0].response==0){
                response.json({"response": "El libro con ID "+Libro.idLibro+" no se encuentra en la base de datos"})
            }else{
                response.json({"response": "Libro actualizado exitosamente","Id":0})
            }
        },(error) => {
            console.log(error.message)
            response.json(error.message)
        })
        //response.json(Libro.titulo)
    }else{
        response.json({"response": "Formulario incompleto"})
    }
})

//Eliminar un libro en la BD
router.delete('/libros/:idLibro', (request, response) => {
    id = request.params.idLibro
    if (id) {
        librosWebService.deleteLibro(id).then(result => {
            let respuestaDB = result[0]
            if(respuestaDB[0].response==0){
                response.json({"response": "El libro con ID "+id+" no se encuentra en la base de datos"})
            }else{
                response.json({"response": "Libro eliminado exitosamente"})
            }
            response.json(result[0])
        },(error) => {
            console.log(error.message)
            response.json(error.message)
        })
    }else{

    }
    
})

module.exports = router