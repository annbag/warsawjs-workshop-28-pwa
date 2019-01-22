import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Movie } from 'src/app/interfaces/movies.inreface';
import { Movies } from '../interfaces/movies.inreface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(
    private http: HttpClient
  ) {}

  async getMovies(): Promise<Movies> {
    return this.http.get<Movies>('/assets/movies.json').toPromise();
  }

  async getMoviesById(id: string): Promise<Movie> {
    const movies = await this.getMovies();
    return movies.find(movie => movie.id === id);
  }
}
