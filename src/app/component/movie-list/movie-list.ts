import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-service';
import { Movie } from '../../interface/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
  private moviesService = inject(MoviesService);
  misPeliculas: Movie[] = [];

  ngOnInit(): void {
    this.misPeliculas = this.moviesService.getMovies();
  }
}
