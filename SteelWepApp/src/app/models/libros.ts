//Interface para almacenar libro del tipo Visible (sin ids)

export interface Libro {
    idLibro: number;
    tituloLibro: string;
    a_oLibro: number;
    numPaginas: number;
    nombreEditorial: string;
    nombreAutor: string;
    genero: string;
}

//Interface para enviar un Libro del tipo requerido por API (sin campos nombre)
export interface LibroNuevo {
    tituloLibro: string;
    a_oLibro: number;
    numPaginas: number;
    idEditorial: number;
    idAutor: number;
    idGenero: number;
}

//Interface para almacenar todas las propiedades de un objeto Libro

export interface LibroCompleto{
    idLibro: number;
    tituloLibro: string;
    a_oLibro: number;
    numPaginas: number;
    idEditorial: number;
    nombreEditorial: string;
    idAutor: number;
    nombreAutor: string;
    idGenero: number;
    genero: string
}

//Interface para enviar id de Libro a eliminar 
export interface LibroEliminado{
    idLibro: number
}