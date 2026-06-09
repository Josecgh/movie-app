import { Component, inject, OnInit, signal } from '@angular/core';
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
  
  pelicula = signal<Movie | undefined>(undefined);

  ngOnInit(): void {
    const id = this.getId();

    this.moviesService.getMovieById(id).subscribe({
      next: (data) => {
        this.pelicula.set(data);
      },
      error: (err) => {
        console.error('Error al cargar la película:', err);
      }
    });
  }

  getId(): string {
    return this.route.snapshot.paramMap.get('movieId') ?? '';
  }

  volverAlListado(): void {
    this.router.navigate(['/movies']);
  }
}
