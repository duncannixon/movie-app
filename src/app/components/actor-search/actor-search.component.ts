import { Component, OnInit } from '@angular/core';
import { SearchParamsService } from '../../services/search-params.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.scss']
})
export class ActorSearchComponent implements OnInit {
  searchTerm = '';

  constructor(private router: Router, private searchParamsService: SearchParamsService) { }

  ngOnInit() {
  }

  performSearch() {
    if (this.searchTerm.length > 0) {
      this.searchParamsService.setActorName(this.searchTerm);
      this.router.navigate(['/search-results/actors']);
    }
  }
}
