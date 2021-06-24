import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Libro, LibroNuevo, LibroCompleto,LibroEliminado } from '../../models/libros';
import { Autor } from '../../models/autores'
import { Editorial } from '../../models/editoriales'
import { Genero } from '../../models/generos'



@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  //URL de la API
  private url:string = "http://localhost:5000/API/libros"

  constructor(private http:HttpClient) { }

  //Metodo para listar todos los Libros, audita interface LibroCompleto
  getLibros():Observable<LibroCompleto[]>{
    return this.http.get<LibroCompleto[]>(this.url)
  }
  
  //Metodo para crear un nuevo libro, sin interfaz definida para auditoria, envia objeto LibroNuevo
  postLibros(libro: LibroNuevo):Observable<any>{
    return this.http.post<any>(this.url,libro)
  }
  
  //Metodo para actualizar un libro, sin interfaz definida para auditoria, envia objeto Libro
  putLibros(libro: Libro):Observable<any>{
    return this.http.put<any>(this.url,libro)
  }

  //Metodo para eliminar un libro, sin interfaz definida para auditoria, recibe y envia un id de libro
  deleteLibros(id: any):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }

  //Metodo para consulta de un solo libro por filtrado de id
  getLibro(id: any):Observable<LibroCompleto[]>{
    return this.http.get<LibroCompleto[]>(`${this.url}/${id}`)
  }
  



}
