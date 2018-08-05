import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.scss']
})
export class MovieSummaryComponent implements OnInit {
  @Input() movie: any;
  title: string;
  overview: string;
  hasImage: boolean;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (this.movie) {
      this.hasImage = (this.movie.backdrop_path !== null);
      this.movie.backdrop_url = `${this.apiService.apiConfiguration.images.base_url}w780${this.movie.backdrop_path}`;
      this.title = this.truncate(this.movie.title, 45);
      this.overview = this.truncate(this.movie.overview, 225);
    }
  }

  selectMovie() {
    if (this.movie) {
      this.router.navigateByUrl(`/movie/${this.movie.id}`);
    }
  }

  truncate(input: string, maxLength: number) {
    let truncatedValue;
    if (input.length > maxLength) {
      truncatedValue = `${input.substring(0, maxLength)} ...`;
    } else {
      truncatedValue = input;
    }
    return truncatedValue;
  }
}
