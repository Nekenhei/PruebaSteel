import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routesComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { CreateComponent } from './components/views/create/create.component'  
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FilterTituloPipe } from './components/pipes/titulo/filter-titulo.pipe'
import { FilterAutorPipe } from './components/pipes/autor/filter-autor.pipe'
import { FilterEditorialPipe } from './components/pipes/editorial/filter-editorial.pipe';
import { FilterGeneroPipe } from './components/pipes/genero/filter-genero.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    routesComponents,
    FilterTituloPipe,
    FilterAutorPipe,
    FilterEditorialPipe,
    FilterGeneroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
