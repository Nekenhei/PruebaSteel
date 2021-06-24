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

  private url:string = "http://localhost:5000/API/libros"

  constructor(private http:HttpClient) { }

  getLibros():Observable<LibroCompleto[]>{
    return this.http.get<LibroCompleto[]>(this.url)
  }
  
  postLibros(libro: LibroNuevo):Observable<any>{
    return this.http.post<any>(this.url,libro)
  }
  
  putLibros(libro: Libro):Observable<any>{
    return this.http.put<any>(this.url,libro)
  }

  deleteLibros(id: any):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }

  getLibro(id: any):Observable<LibroCompleto[]>{
    return this.http.get<LibroCompleto[]>(`${this.url}/${id}`)
  }
  



}
