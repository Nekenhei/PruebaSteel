import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { GetComponent } from './components/get/get.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },{
    path: 'New',
    component: NewComponent
  },{
    path: 'Get',
    component: GetComponent
  },{
    path: 'Edit',
    component: EditComponent
  },{
    path: 'Delete',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export {routes}