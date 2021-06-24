import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books';
import { LibrosAPIService } from 'src/app/services/libros-api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})

export class GetComponent implements OnInit {
  listBooks: Book[] = [];


  constructor(private bookService: LibrosAPIService) { 
    this.listBooks = []
  }

  getLibros(){
    this.bookService.getLibros().subscribe(
      response => this.listBooks = response)  
  }

  ngOnInit(): void {
    this.getLibros()
  }

}




