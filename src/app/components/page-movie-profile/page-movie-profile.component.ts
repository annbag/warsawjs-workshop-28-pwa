import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/interfaces/movies.inreface';
import { MoviesService } from 'src/app/services/movies.service';
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
    private moviesService: MoviesService
  ) { }
  ngOnInit() {
    this.setupMovie();
  }

  async setupMovie() {
    const id = this.route.snapshot.params.id;
    this.movie = await this.moviesService.getMoviesById(id);
  }

}
