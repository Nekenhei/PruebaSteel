import { Component } from '@angular/core';
import { routes } from './app-routing.module'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active = 1
  routes = routes
  lables = labels
}

const labels = [
  "Home",
  "Listar Libros",
  "Editar Libros",
  "Crear Libro",
  "Eliminar Libro"
]
