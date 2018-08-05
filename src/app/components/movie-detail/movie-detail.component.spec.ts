import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { MovieDetailComponent } from './movie-detail.component';
import { ApiService } from '../../services/api.service';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  const movie = {
    adult: false,
    backdrop_path: '/9GyBSsMiGkPSk4OESIYZuedijBI.jpg',
    belongs_to_collection: {
      id: 531330,
      name: 'Top Gun Collection',
      poster_path: null,
      backdrop_path: null
    },
    budget: 15000000,
    genres: [
      {
        id: 28,
        name: 'Action'
      },
      {
        id: 10749,
        name: 'Romance'
      },
      {
        id: 10752,
        name: 'War'
      }
    ],
    homepage: null,
    id: 744,
    imdb_id: 'tt0092099',
    original_language: 'en',
    original_title: 'Top Gun',
    overview: `For Lieutenant Pete 'Maverick' Mitchell and his friend and Co-Pilot Nick 'Goose' Bradshaw being accepted into an elite training school for ...`,
    popularity: 14.514,
    poster_path: '/orGXnBKfT41LxZhitLkXhqUfJJW.jpg',
    production_companies: [
      {
        id: 4,
        logo_path: '/fycMZt242LVjagMByZOLUGbCvv3.png',
        name: 'Paramount',
        origin_country: 'US'
      }
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America'
      }
    ],
    release_date: '1986-05-16',
    revenue: 356830601,
    runtime: 110,
    spoken_languages: [
      {
        iso_639_1: 'en',
        name: 'English'
      }
    ],
    status: 'Released',
    tagline: 'Up there with the best of the best.',
    title: 'Top Gun',
    video: false,
    vote_average: 6.8,
    vote_count: 2458,
    release_date_formatted: '16th May 1986',
    backdrop_url: 'http://image.tmdb.org/t/p/w780/9GyBSsMiGkPSk4OESIYZuedijBI.jpg',
    poster_url: 'http://image.tmdb.org/t/p/w780/orGXnBKfT41LxZhitLkXhqUfJJW.jpg'
  };

  beforeEach(async(() => {
    const apiServiceMock = jasmine.createSpyObj('ApiService', ['getCredits']);
    apiServiceMock.getCredits.and.returnValue( of([]) );

    apiServiceMock.apiConfiguration = {
      images: {
        base_url: 'BASE_URL'
      }
    };

    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],

      providers: [
        { provide: ActivatedRoute,
          useValue: {
            snapshot: {
             data: { movie }
            }
          }
        },
        { provide: ApiService, useValue: apiServiceMock }
      ],

      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct movie title', () => {
    const element = fixture.debugElement.query(By.css('#movie-title')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe(movie.title);
  });

  it('should have the correct movie overview', () => {
    const element = fixture.debugElement.query(By.css('#movie-overview')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe(movie.overview);
  });

  it('should have the correct movie release date', () => {
    const element = fixture.debugElement.query(By.css('#release-date')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('Released: 16th May 1986');
  });
});
