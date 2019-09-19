import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesKids: any;

  constructor( public servicePeliculas: PeliculasService ) {

    this.servicePeliculas.getCartelera()
        .subscribe(
          data => this.cartelera = data
        );

    this.servicePeliculas.getPopulares()
        .subscribe(
          data => this.populares = data
        );

    this.servicePeliculas.getPopularesKids().subscribe(

      data => this.popularesKids = data

    );


  }

  ngOnInit() {


  }



}
