import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {
  actor: any;
  castCredits: any;
  hasImage: boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.actor = this.route.snapshot.data['actor'];

    if (this.actor) {
      this.actor.profile_path_url = `${this.apiService.apiConfiguration.images.base_url}w780${this.actor.profile_path}`;
      this.hasImage = (this.actor.profile_path !== null);

      if (this.actor.biography === null || this.actor.biography.length === 0) {
        this.actor.biography = 'Awaiting actor biography';
      }

      this.apiService.getMovieCreditsForPerson(this.actor.id).subscribe(credits => {
        if (credits) {
          this.castCredits = (<any>credits).cast;

          if (this.castCredits) {
            for (const movie of this.castCredits) {
              movie.poster_path_url = `${this.apiService.apiConfiguration.images.base_url}w780${movie.poster_path}`;
            }
          }
        }

        window.scrollTo(0, 0);
      });
    }
  }
}
