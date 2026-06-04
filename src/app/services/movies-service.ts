import { inject, Injectable } from '@angular/core';
import { Movie } from '../interface/movie';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  // movies: Movie[] = [
  //   {
  //     "id": "1",
  //     "title": "El Señor de los Anillos",
  //     "director": "Peter Jackson",
  //     "genre": "Fantasía"
  //   },
  //   {
  //     "id": "2",
  //     "title": "Blade Runner 2049",
  //     "director": "Denis Villeneuve",
  //     "genre": "Ciencia Ficción"
  //   },
  //   {
  //     "id": "3",
  //     "title": "El Padrino",
  //     "director": "Francis Ford Coppola",
  //     "genre": "Drama"
  //   }
  // ]

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/movies';

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '¡Se ha producido un error desconocido!';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código de error del servidor: ${error.status}, mensaje: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
