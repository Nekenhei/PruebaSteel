import { Component, OnInit } from '@angular/core';
import { routes } from '../../../app-routing.module'




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes = routes
  labels = labels

  constructor() { }

  ngOnInit(): void {
  }

}

const labels = [
  "Home",
  "Listar Libros"
]