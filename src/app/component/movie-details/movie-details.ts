import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies-service';
import { Movie } from '../../interface/movie';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private moviesService = inject(MoviesService);
  private router = inject(Router);
  
  pelicula: Movie | undefined;

  ngOnInit(): void {
    const id = this.getId();

    this.pelicula = this.moviesService.getMovieById(id);
  }

  getId(): string {
    const idParam = this.route.snapshot.paramMap.get('movieId');
    return idParam ?? '';
  }

  volverAlListado(): void {
    this.router.navigate(['/movies']);
  }
}
