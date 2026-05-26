import { Injectable } from '@angular/core';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [
    {
      "id": "1",
      "title": "El Señor de los Anillos",
      "director": "Peter Jackson",
      "genre": "Fantasía"
    },
    {
      "id": "2",
      "title": "Blade Runner 2049",
      "director": "Denis Villeneuve",
      "genre": "Ciencia Ficción"
    },
    {
      "id": "3",
      "title": "El Padrino",
      "director": "Francis Ford Coppola",
      "genre": "Drama"
    }
  ]

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: string): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}
