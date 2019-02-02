import { Movies } from '../../interfaces/movies.interface';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  movies: Movies = null;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.setupMovies();
  }

  async setupMovies() {
    this.movies = await this.moviesService.getMovies();
  }
}
