import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { SearchParamsService } from '../../services/search-params.service';

@Injectable({
  providedIn: 'root'
})
export class ActorListResolver {

  constructor(private apiService: ApiService, private searchParamsService: SearchParamsService) { }

  resolve(): Observable<any>|Promise<any> {
    return this.apiService.actorSearch(this.searchParamsService.getActorName(), this.searchParamsService.page);
  }
}
