import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiConfiguration: any;

  constructor(private http: HttpClient) {
    this.getConfiguration().subscribe(config => {
      this.apiConfiguration = config;
    },
    error => {
      console.log(error);
    });
  }

  getConfiguration() {
    return this.doGet(`configuration`);
  }

  getMovieDetail(movieId: string) {
    return this.doGet(`movie/${movieId}`);
  }

  getCredits(movieId: string) {
    return this.doGet(`movie/${movieId}/credits`);
  }

  getCreditById(creditId: string) {
    return this.doGet(`credit/${creditId}`);
  }

  getMovieCreditsForPerson(personId: string) {
    return this.doGet(`person/${personId}/movie_credits`);
  }

  getPersonById(personId: string) {
    return this.doGet(`person/${personId}`);
  }

  doGet(endpoint: string) {
    const url = `${environment.serviceTier}/${endpoint}?api_key=${environment.apiKey}`;
    return this.http.get(url, httpOptions);
  }

  actorSearch(searchTerm: string, page: number) {
    const url = `${environment.serviceTier}/search/person?query=${searchTerm}&page=${page}&include_adult=false&api_key=${environment.apiKey}`;
    return this.http.get(url, httpOptions);
  }

  movieSearch(searchTerm: string, page: number) {
    const url = `${environment.serviceTier}/search/movie?query=${searchTerm}&page=${page}&include_adult=false&api_key=${environment.apiKey}`;
    return this.http.get(url, httpOptions);
  }
}
