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

  //Iconos font-awesome
  faEdit = faEdit
  
  //Declaración variables que recibiran los valores del form para los filtros
  filterAutor =''
  filterTitulo =''
  filterEditorial =''
  filterGenero = ""


  //Interface de libros para almacenar respuesta API
  listBooks: LibroCompleto[] = [];

  constructor(private apiLibros: LibrosService,private router: Router ) { }

  ngOnInit(): void {
    this.apiLibros.getLibros().subscribe( respuesta => {
      this.listBooks = respuesta
    })
  }

  //redireccionamiento para uso de API Edit/Delete pasando un Id como parametro en la url
  redireccionar (id: number){
    this.router.navigate([`editLibro/`+id])
  }

  

}
