import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-actor-summary',
  templateUrl: './actor-summary.component.html',
  styleUrls: ['./actor-summary.component.scss']
})
export class ActorSummaryComponent implements OnInit {
  @Input() actor: any;
  hasImage: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.hasImage = (this.actor && this.actor.profile_path !== null);

    if (this.actor) {
      this.actor.profile_image_url =  `${this.apiService.apiConfiguration.images.base_url}w780${this.actor.profile_path}`;
    }
  }
}
