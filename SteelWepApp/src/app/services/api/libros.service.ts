import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Libro, LibroNuevo } from '../../models/libros';
import { Autor } from '../../models/autores'
import { Editorial } from '../../models/editoriales'
import { Genero } from '../../models/generos'



@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private url:string = "http://localhost:5000/API/libros"

  constructor(private http:HttpClient) { }

  getLibros():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url)
  }
  
  postLibros(libro: LibroNuevo):Observable<any>{
    return this.http.post<any>(this.url,libro)
  }
  
  putLibros():Observable<any>{
    return this.http.put<any>(this.url,{})
  }

  deleteLibros():Observable<any>{
    return this.http.delete<any>(this.url)
  }

  getLibro(id: number):Observable<Libro>{
    return this.http.get<Libro>(`${this.url}/${id}`)
  }
  



}
