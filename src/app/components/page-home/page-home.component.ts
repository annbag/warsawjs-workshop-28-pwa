import { Movies } from './../../interface/movie';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  movieList: Movies = null;

  constructor(private movies: MoviesService) {}

  ngOnInit() {
    this.movieList = this.movies.getMovies();
  }
}
