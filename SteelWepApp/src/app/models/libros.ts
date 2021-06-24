export interface Libro {
    idLibro: number;
    tituloLibro: string;
    a_oLibro: number;
    numPaginas: number;
    nombreEditorial: string;
    nombreAutor: string;
    genero: string;
}

export interface LibroNuevo {
    tituloLibro: string;
    a_oLibro: number;
    numPaginas: number;
    idEditorial: number;
    idAutor: number;
    idGenero: number;
}

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

export interface LibroEliminado{
    idLibro: number
}