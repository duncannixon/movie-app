import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any> {
    return this.apiService.getMovieDetail(route.paramMap.get('id'));
  }
}
