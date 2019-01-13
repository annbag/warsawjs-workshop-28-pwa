import { Movie } from 'src/app/interface/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-movie-profile',
  templateUrl: './page-movie-profile.component.html',
  styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit {
  movie: Movie = null;
  constructor(
    private route: ActivatedRoute,
    private movies: MoviesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log({id});

    this.movie = this.movies.getMoviesById(id);
  }

}
