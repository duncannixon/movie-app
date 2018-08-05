import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ActorResolver {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any> {
    return this.apiService.getPersonById(route.paramMap.get('id'));
  }
}
