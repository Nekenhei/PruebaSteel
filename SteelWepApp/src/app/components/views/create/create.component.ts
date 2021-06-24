import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LibrosService} from '../../../services/api/libros.service'
import {LibroNuevo} from '../../../models/libros'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //Declaración iconos Font Awesome
  faPlus = faPlus

  //Formulario de creacion
  createForm = new FormGroup({
    tituloLibro : new FormControl('',Validators.required),
    a_oLibro : new FormControl('',Validators.required),
    numPaginas : new FormControl('',Validators.required),
    idEditorial : new FormControl('',Validators.required),
    idAutor : new FormControl('',Validators.required),
    idGenero : new FormControl('',Validators.required)
  })

  //Array para construir formulario
  inputsList = [{
    text: "Nombre del libro",
    type: "text",
    id: "tituloLibro",
    placeholder: "Ej: La odisea"
  },{
    text: "Año de publicación",
    type: "number",
    id: "a_oLibro",
    placeholder: "Ej: 2003"
  },
  {
    text: "Cantidad de paginas del libro",
    type: "number",
    id: "numPaginas",
    placeholder: "Ej: 194"
  },
  {
    text: "Editorial",
    type: "text",
    id: "idEditorial",
    placeholder: "Ej: Norma"
  },{
    text: "Autor",
    type: "text",
    id: "idAutor",
    placeholder: "Ej: Miguel de Cervantes Saavedra"
  },{
    text: "Genero",
    type: "text",
    id: "idGenero",
    placeholder: "Ej: Comedia"
  }]

  constructor(private api: LibrosService) { }

  ngOnInit(): void {
    
  }

  //declaracion para alertas
  errorStatus: boolean = false
  okStatus: boolean = false
  mensaje:string = ""


  //Llamada a API
  onSubmit(form: LibroNuevo){
    this.api.postLibros(form).subscribe(resultado => {
      this.mensaje = resultado.response
      if(resultado.Id == undefined){
        this.errorStatus = true
        this.okStatus = false
      }else{
        this.okStatus = true
        this.errorStatus = false
      }
    })
  }
}
