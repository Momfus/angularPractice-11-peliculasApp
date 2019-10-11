import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';


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

  peliculas: any[] = [];

  constructor(
              private http: HttpClient
  ) { }

  getCartelera() {

    const desde = new Date();
    const hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );


    const desdeMonthTwoDecimals = ('0' + (desde.getMonth() + 1)).slice(-2);
    const hastaMonthTwoDecimals = ('0' + (desde.getMonth() + 1)).slice(-2);

    const desdeDayTwoDecimals = ('0' + (desde.getDay() + 1)).slice(-2);
    const hastaDayTwoDecimals = ('0' + (desde.getDay() + 1)).slice(-2);


    const desdeStr = `${ desde.getFullYear() }-${ desdeMonthTwoDecimals }-${desdeDayTwoDecimals }`;
    const hastaStr = `${ hasta.getFullYear() }-${ hastaMonthTwoDecimals }-${hastaDayTwoDecimals }`;

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=en-US&sort_by=popularity
    .desc&include_adult=false&include_video=false&page=1&callback=JSONP_CALLBACK`;

    return this.http.jsonp( url, 'JSONP_CALLBACK' );

  }

  getPopulares() {

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, 'JSONP_CALLBACK' );

  }

  getPopularesKids() {

    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, 'JSONP_CALLBACK' );

  }

  buscarPelicula( texto: string ) {

    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp( url, 'JSONP_CALLBACK' )
            .pipe( map( (res:any) => {

              this.peliculas = res['results'];
              return res['results'];

            } ) );
  }


  getPelicula( id: string ) {

    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, 'JSONP_CALLBACK' );

  }

}
