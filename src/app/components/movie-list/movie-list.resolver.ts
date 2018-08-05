import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { SearchParamsService } from '../../services/search-params.service';

@Injectable({
  providedIn: 'root'
})
export class MovieListResolver {

  constructor(private apiService: ApiService, private searchParamsService: SearchParamsService) { }

  resolve(): Observable<any>|Promise<any> {
    return this.apiService.movieSearch(this.searchParamsService.getMovieTitle(), this.searchParamsService.page);
  }
}
