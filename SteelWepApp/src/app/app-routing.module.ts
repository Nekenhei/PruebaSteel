import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component'
import { GetComponent } from './components/views/get/get.component'

const routes: Routes = [
  
  {path: "",redirectTo: 'home',pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "getLibros",component: GetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export {routes}
export const routesComponents =  [HomeComponent,GetComponent]
