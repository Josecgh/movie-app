import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-service';
import { Movie } from '../../interface/movie';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  private moviesService = inject(MoviesService);
  // misPeliculas: Movie[] = [];

  misPeliculas = toSignal(this.moviesService.getMovies(), { initialValue: [] });
}
