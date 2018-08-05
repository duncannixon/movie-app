import { Component, OnInit } from '@angular/core';
import { SearchParamsService } from '../../services/search-params.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  searchTerm = '';

  constructor(private router: Router, private searchParamsService: SearchParamsService) { }

  ngOnInit() {
  }

  performSearch() {
    if (this.searchTerm.length > 0) {
      this.searchParamsService.setMovieTitle(this.searchTerm);
      this.router.navigate(['/search-results/movies']);
    }
  }
}
