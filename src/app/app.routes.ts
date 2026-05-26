import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { MovieList } from './component/movie-list/movie-list';
import { MovieDetails } from './component/movie-details/movie-details';
import { NotFound } from './component/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'home', redirectTo: '', component: Home, pathMatch: 'full' },
  { path: 'movies', component: MovieList },
  { path: 'movies/:movieId', component: MovieDetails },
  { path: '**', component: NotFound }
];
