import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LibrosService} from '../../../services/api/libros.service'
import {Libro, LibroCompleto, LibroEliminado} from '../../../models/libros'
import { Router, ActivatedRoute, Routes } from '@angular/router'
import { faEdit, faMinusSquare } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  faEdit = faEdit
  faMinusSquare = faMinusSquare
  
  libroEditable: LibroCompleto[] = [];
  libroId : number = 0
  libroEliminado: Libro[] = []

  createForm = new FormGroup({
    idLibro : new FormControl('',Validators.required),
    tituloLibro : new FormControl('',Validators.required),
    a_oLibro : new FormControl('',Validators.required),
    numPaginas : new FormControl('',Validators.required),
    idEditorial : new FormControl('',Validators.required),
    idAutor : new FormControl('',Validators.required),
    idGenero : new FormControl('',Validators.required)
  })

  deleteForm = new FormGroup({
    validacion : new FormControl('', Validators.required)
  })

  deleteList = [{
    text: `Escriba "OK" si está seguro de querer eliminar el libro`,
    type: "text",
    id: "validacion",
    placeholder: ""
  }]

  inputsList = [{
    text: "Id Libro",
    type: "number",
    id: "idLibro",
    placeholder: "",
    status: "true"
  },
    {
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

  constructor(private api: LibrosService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let x = this.activeRouter.snapshot.paramMap.get('id')!
    this.libroId = +x
    this.api.getLibro(this.libroId).subscribe(respuesta =>{
      this.libroEditable = respuesta
      this.createForm.setValue({
        "idLibro": this.libroEditable[0].idLibro,
        "tituloLibro": this.libroEditable[0].tituloLibro,
        "a_oLibro": this.libroEditable[0].a_oLibro,
        "numPaginas": this.libroEditable[0].numPaginas,
        "idEditorial": this.libroEditable[0].idEditorial,
        "idAutor": this.libroEditable[0].idAutor,
        "idGenero": this.libroEditable[0].idGenero
  
      })
    })


  }

  errorStatus: boolean = false
  okStatus: boolean = false
  mensaje:string = ""
  errorStatusDel: boolean = false
  okStatusDel: boolean = false
  mensajeDel:string = ""

  eliminarLibro(form: any){
    if(form.validacion.toLowerCase() =="ok"){
      this.api.deleteLibros(this.libroId).subscribe(resultado => {
         this.mensajeDel = resultado.response})
      this.okStatusDel = true
      this.errorStatusDel = false
      }else{
        this.errorStatusDel = true
        this.okStatusDel = false
        this.mensajeDel = "Se necesita confirmar la acción"
        
      }
  }

  


  onSubmit(form: LibroCompleto){
    this.api.putLibros(form).subscribe(resultado => {
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
