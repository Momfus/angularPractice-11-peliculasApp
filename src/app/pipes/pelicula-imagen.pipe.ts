import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform( pelicula: any ): any {

    let url = 'http://image.tmdb.org/t/p/w500';

    if ( pelicula.backgrop_path )  {

      return url + pelicula.backdrop_path;

    } else {

      if ( pelicula.poster_path ) {

        return url + pelicula.poster_path;

      } else {

        return 'assets/img/no-image-300x300.jpg';

      }

    }

  }

}
