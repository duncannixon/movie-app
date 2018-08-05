import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Array<any>;
  from = 1;
  to: number;
  of: number;

  constructor() {
  }

  ngOnInit() {
    if (this.movies) {
      this.to = this.movies.length;
      this.of = this.movies.length;
    }
  }
}
