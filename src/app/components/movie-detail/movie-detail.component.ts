import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  actors: any;
  castLoaded = false;
  hasBackdropImage: boolean;
  hasPosterImage: boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data['movie'];

    if (this.movie) {
      this.hasBackdropImage = (this.movie.backdrop_path !== null);
      this.hasPosterImage = (this.movie.poster_path !== null);
      this.movie.release_date_formatted = moment(this.movie.release_date, 'YYYY-MM-DD').format('Do MMMM YYYY');
      this.movie.backdrop_url = `${this.apiService.apiConfiguration.images.base_url}w780${this.movie.backdrop_path}`;
      this.movie.poster_url = `${this.apiService.apiConfiguration.images.base_url}w780${this.movie.poster_path}`;

      // Load the actors for this movie
      this.apiService.getCredits(this.movie.id).subscribe(credits => {
        if (credits) {
          this.actors = (<any>credits).cast;
        }
        this.castLoaded = true;
        window.scrollTo(0, 0);
      });
    }
  }
}
