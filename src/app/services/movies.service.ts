import { Movie } from 'src/app/interface/movie';
import { Movies } from './../interface/movie';
import { Injectable } from '@angular/core';
import MOVIES from './../movies.json';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() {}

  getMovies(): Movies {
    return MOVIES;
  }
  getMoviesById(id: string): Movie {
    const movies = this.getMovies();
    return movies.find((movie) => {
      return movie.id === id;
    });
  }
}
