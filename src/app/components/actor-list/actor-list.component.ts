import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { ActorSummaryComponent } from '../actor-summary/actor-summary.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {
  @Input() actors: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  showActor(actor) {
    if (actor.id) {
      this.router.navigateByUrl(`/actor/${actor.id}`);
    } else {
      this.apiService.getCreditById(actor.credit_id).subscribe(creditDetail => {
        const personId = (<any>creditDetail).person.id;
        this.router.navigateByUrl(`/actor/${personId}`);
      });
    }
  }
}
