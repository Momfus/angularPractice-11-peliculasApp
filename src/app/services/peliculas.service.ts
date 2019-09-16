import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // tslint:disable: no-inferrable-types
  // tslint:disable: max-line-length

  /*
    w300 --> es el tamaño que si quiero mas grande seria cambiar el 300 por 600 (por ejemplo)

    Luego se usa / y la dirección de la imagen sacada del atributo dado por el api (como el atributo poster_path)

    Para ver la imagen (ejemplo):
        http://image.tmdb.org/t/p/w300/ok0Zt1kl82GrGihF9LSlHMXZup.jpg

  */

  private apikey: string = '4a80e067246de68085ecf7925f25dd6f';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor(
              private http: HttpClient
  ) { }

  getPopulares() {

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, 'JSONP_CALLBACK' );

  }

  buscarPelicula( texto: string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, 'JSONP_CALLBACK' );

  }

}
