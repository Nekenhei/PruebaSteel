const connection = require('../Model/connection');
const sql = require('mssql')


//Función get all - (Read del CRUD)

async function getLibros(){
    try {
        let pool = await sql.connect(connection)
        let resultado = await pool.request().query("select * from listarLibrosVw")
        //console.log(resultado.recordsets)
        return resultado.recordsets
    } catch (error) {
        console.log(error)
    }
}

//Función get lista de generos - (Read del CRUD)

async function getGeneros(){
    try {
        let pool = await sql.connect(connection)
        let resultado = await pool.request().query("select idGenero, genero from generosTb order by idGenero")
        //console.log(resultado.recordsets)
        return resultado.recordsets
    } catch (error) {
        console.log(error)
    }
}

//Función get lista de autores - (Read del CRUD)

async function getAutores(){
    try {
        let pool = await sql.connect(connection)
        let resultado = await pool.request().query("select idAutor, nombreAutor from autoresTb order by idAutor")
        //console.log(resultado.recordsets)
        return resultado.recordsets
    } catch (error) {
        console.log(error)
    }
}

//Función get lista de editoriales - (Read del CRUD)

async function getEditoriales(){
    try {
        let pool = await sql.connect(connection)
        let resultado = await pool.request().query("select idEditorial, nombreEditorial from editorialesTb order by idEditorial")
        //console.log(resultado.recordsets)
        return resultado.recordsets
    } catch (error) {
        console.log(error)
    }
}

//Función get por codigo libro - (Read del CRUD)

async function getLibro(idLibro){
    try {
        let pool = await sql.connect(connection)
        let resultado = await pool.request()
        .input('idLibro', sql.Int, idLibro)
        .query("select * from listarLibrosVw where idLibro = @idLibro")
        //console.log(resultado.recordsets)
        return resultado.recordsets
    } catch (error) {
        console.log(error)
    }
}


//Funcion new - (Create del CRUD)

async function newLibro(Libro){
    try {
        let pool = await sql.connect(connection)
        let newLibro = await pool.request()
        .input('tituloLibro', sql.VarChar(200),Libro.tituloLibro)
        .input('a_oLibro', sql.Int,Libro.a_oLibro)
        .input('numPaginas', sql.Int,Libro.numPaginas)
        .input('idEditorial', sql.Int,Libro.idEditorial)
        .input('idAutor', sql.Int,Libro.idAutor)
        .input('idGenero', sql.Int,Libro.idGenero)
        .execute('insertarLibro_SP')
        return newLibro.recordsets
    } catch (error) {
        throw new Error (`Se generó un error al ejecutar el procedimiento ${error.procName}...${error.message}`)
        console.log(error)
    }
}

//Funcion put - (Update del CRUD)

async function putLibro(Libro){
    try {
        let pool = await sql.connect(connection)
        let putLibro = await pool.request()
        .input("idLibro", sql.Int, Libro.idLibro)
        .input('tituloLibro', sql.VarChar(200),Libro.titulo)
        .input('a_oLibro', sql.Int,Libro.a_o)
        .input('numPaginas', sql.Int,Libro.numPaginas)
        .input('idEditorial', sql.Int,Libro.idEditorial)
        .input('idAutor', sql.Int,Libro.idAutor)
        .input('idGenero', sql.Int,Libro.idGenero)
        .execute('actualizarLibro_SP')
        return putLibro.recordsets
    } catch (error) {
        throw new Error (`Se generó un error al ejecutar el procedimiento ${error.procName}...${error.message}`)
        console.log(error)
    }
}

//Funcion delete - (Delete del CRUD)

async function deleteLibro(Libro){
    try {
        let pool = await sql.connect(connection)
        let deleteLibro = await pool.request()
        .input("idLibro", sql.Int, Libro.idLibro)
        .execute('eliminarLibro_SP')
        return deleteLibro.recordsets
    } catch (error) {
        throw new Error (`Se generó un error al ejecutar el procedimiento ${error.procName}...${error.message}`)
        console.log(error)
    }
}



//getLibros() 
module.exports = {
    getLibros: getLibros,
    newLibro : newLibro,
    putLibro: putLibro,
    deleteLibro: deleteLibro,
    getLibro: getLibro,
    getAutores: getAutores,
    getGeneros: getGeneros,
    getEditoriales: getEditoriales
}