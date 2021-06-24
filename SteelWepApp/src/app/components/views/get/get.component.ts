import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/api/libros.service'
import { LibroCompleto } from '../../../models/libros'
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons'





@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  faEdit = faEdit
  
  filterAutor =''
  filterTitulo =''
  filterEditorial =''
  filterGenero = ""


  listBooks: LibroCompleto[] = [];

  constructor(private apiLibros: LibrosService,private router: Router ) { }

  ngOnInit(): void {
    this.apiLibros.getLibros().subscribe( respuesta => {
      this.listBooks = respuesta
    })
  }

  redireccionar (id: number){
    this.router.navigate([`editLibro/`+id])
  }

  

}
