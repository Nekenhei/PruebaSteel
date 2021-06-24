import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Book } from '../models/books';


@Injectable({
  providedIn: 'root'
})
export class LibrosAPIService {
  
  private apiUrl = "http://localhost:5000/API/libros"
  
  getLibros():Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl)
  }
  
  postLibros():Observable<any>{
    return this.http.post<any>(this.apiUrl,{})
  }
  
  putLibros():Observable<any>{
    return this.http.put<any>(this.apiUrl,{})
  }

  deleteLibros():Observable<unknown>{
    return this.http.delete<unknown>(this.apiUrl,{})
  }

  getLibro(id: number):Observable<Book>{
    return this.http.get<Book>(`${this.apiUrl}/${id}`)
  }
  
  
  constructor(private http: HttpClient) { 

    


    /*
    /libros
    /libros/:idLibro
    */


  }
}
