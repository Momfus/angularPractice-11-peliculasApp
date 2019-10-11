import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // tslint:disable: no-inferrable-types
  buscar: string = '';

  constructor(   public servicePeliculas: PeliculasService,
                 public route: ActivatedRoute ) {


      this.route.params.subscribe( parametros => {

        console.log(parametros);
        if ( parametros.texto ) {

          this.buscar = parametros.texto;
          this.buscarPelicula();

        }


      } );

  }

  ngOnInit() {
  }

  buscarPelicula() {

    if ( this.buscar.length === 0 ) {
      return;

    }

    this.servicePeliculas.buscarPelicula( this.buscar )
        .subscribe();

  }

}
