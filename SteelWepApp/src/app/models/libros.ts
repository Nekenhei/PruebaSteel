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
