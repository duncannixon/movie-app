import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SearchParamsService } from '../../services/search-params.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  movies: any;
  actors: any;
  isMovieSearch: boolean;
  paging = {
    page: '',
    total_results: '',
    total_pages: ''
  };
  navigationSubscription: any;

  constructor(private route: ActivatedRoute, private router: Router, private searchParamsService: SearchParamsService) {
    // Subscribe to the router events, storing the subscription so we can unsubscribe later.
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the results component
      if (e instanceof NavigationEnd) {
        this.initialiseResults();
      }
    });
  }

  ngOnInit() {
    const movieTitle = this.searchParamsService.getMovieTitle();
    this.isMovieSearch = movieTitle && movieTitle.length > 0;
    this.initialiseResults();
  }

  ngOnDestroy() {
    // Avoid memory leaks here by cleaning up after ourselves. If we don't then we will continue to run our initialiseResults()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }

  initialiseResults() {
    const searchResult = this.route.snapshot.data['searchResults'];

    if (searchResult) {
      this.paging = {
        page: searchResult.page,
        total_results: searchResult.total_results,
        total_pages: searchResult.total_pages
      };

      if (this.isMovieSearch) {
        this.movies = searchResult.results;
      } else {
        this.actors = searchResult.results;
      }
    }

    window.scrollTo(0, 0);
  }

  onPreviousPage() {
    if (this.searchParamsService.page > 1) {
      this.searchParamsService.page--;
      const url = this.isMovieSearch ? '/search-results/movies' : '/search-results/actors';
      this.router.navigate([url]);
    }
  }

  onNextPage() {
    if (Number(this.searchParamsService.page) < Number(this.paging.total_pages)) {
      this.searchParamsService.page++;
      const url = this.isMovieSearch ? '/search-results/movies' : '/search-results/actors';
      this.router.navigate([url]);
    }
  }
}
