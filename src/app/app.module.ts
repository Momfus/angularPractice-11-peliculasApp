import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';

import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { PeliculaComponent } from './components/pages/pelicula/pelicula.component';
import { GaleriaComponent } from './components/pages/home/galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SearchComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot( ROUTES, {useHash: true} ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
