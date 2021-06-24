import { Component, OnInit } from '@angular/core';
import { routes } from '../../../app-routing.module'
import { faHome, faTable} from '@fortawesome/free-solid-svg-icons'




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes = routes
  labels = labels
  faHome = faHome
  faTable = faTable
  constructor() { }

  ngOnInit(): void {
  }

}

const labels = [
  {
    label:"Home",
    icon: faHome},
  {
    label:"Listar Libros",
    icon:faTable}
  
]