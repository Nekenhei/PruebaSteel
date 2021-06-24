import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/api/libros.service'
import { Libro } from '../../../models/libros'




@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  listBooks: Libro[] = [];

  constructor(private apiLibros: LibrosService ) { }

  ngOnInit(): void {
    this.apiLibros.getLibros().subscribe( respuesta => {
      this.listBooks = respuesta
    })
  }

  editarLibro(id: number){
    console.log(id)
  }

  eliminarLibro(id: number){
    console.log(id)
  }

}
