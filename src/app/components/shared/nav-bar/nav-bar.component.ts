import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  buscarPelicula( textoBuscar: string ){

    if ( textoBuscar.length === 0 ) {
      return;
    }

    this.router.navigate( [ 'search', textoBuscar ] )

  }

}
