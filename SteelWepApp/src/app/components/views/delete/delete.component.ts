import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LibrosService} from '../../../services/api/libros.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() idLibro: number = 0;

  createForm = new FormGroup({
    validacion : new FormControl('',Validators.required),
  })

  inputsList = [{
    text: `Escriba "OK" si está seguro de querer eliminar el libro`,
    type: "text",
    id: "validacion",
    placeholder: ""
  }]

  constructor(private api: LibrosService) {} 

  ngOnInit(): void {
  }

  errorStatus: boolean = false
  okStatus: boolean = false
  mensaje:string = ""

  onSubmit(form: any){
    this.api.deleteLibros().subscribe(resultado => {

    })
    if(form.validacion.toLowerCase() =="ok"){
    this.okStatus = true
    this.mensaje = "Libro eliminado"
    this.errorStatus = false
    }else{
      this.errorStatus = true
      this.okStatus = false
      this.mensaje = "Se necesita confirmar la acción"
      
    }
  }

}
