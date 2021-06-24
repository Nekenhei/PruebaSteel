export interface Book {
    idLibro: number;
    tituloLibro: string;
    a_oLibro: number;
    numPaginas: number;
    nombreEditorial: string;
    nombreAutor: string;
    genero: string;
}

export interface BookNew {
    idLibro: number;
    tituloLibro: string;
    a_oLibro: number;
    numPaginas: number;
    idEditorial: number;
    idAutor: number;
    idGenero: number;
}
