import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchParamsService {
  private movieTitle = '';
  private actorName = '';
  public page = 1;

  constructor() { }

  getMovieTitle() {
    return this.movieTitle;
  }

  setMovieTitle(movieTitle: string) {
    this.movieTitle = movieTitle;
    this.actorName = '';
  }

  getActorName() {
    return this.actorName;
  }

  setActorName(actorName: string) {
    this.movieTitle = '';
    this.actorName = actorName;
  }
}
