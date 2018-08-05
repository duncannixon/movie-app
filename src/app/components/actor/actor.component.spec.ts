import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { ActorComponent } from './actor.component';

describe('ActorComponent', () => {
  let component: ActorComponent;
  let fixture: ComponentFixture<ActorComponent>;

  const actor = {
    birthday: '1962-07-03',
    known_for_department: 'Acting',
    deathday: null,
    id: 500,
    name: 'Tom Cruise',
    also_known_as: [
      'Том Круз',
      'トム・クルーズ',
      'ทอม ครูซ',
      '湯姆·克魯斯',
      '톰 크루즈',
      'توم كروز',
      'Thomas Cruise Mapother IV'
    ],
    gender: 2,
    biography: 'ACTOR_BIOGRAPHY',
    popularity: 36.473,
    place_of_birth: 'Syracuse, New York, USA',
    profile_path: '/2Dkx4uuGoWFrPSitxdikv9z5azR.jpg',
    adult: false,
    imdb_id: 'nm0000129',
    homepage: 'http://www.tomcruise.com/',
    profile_path_url: 'http://image.tmdb.org/t/p/w780/2Dkx4uuGoWFrPSitxdikv9z5azR.jpg'
  };

  beforeEach(async(() => {
    const movieCredits = [];

    const apiServiceMock = jasmine.createSpyObj('ApiService', ['getMovieCreditsForPerson']);
    apiServiceMock.getMovieCreditsForPerson.and.returnValue( of(movieCredits) );

    apiServiceMock.apiConfiguration = {
      images: {
        base_url: 'BASE_URL'
      }
    };

    TestBed.configureTestingModule({
      declarations: [ ActorComponent ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: { actor }
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
    fixture = TestBed.createComponent(ActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a placeholder image when there is no actor profile image', () => {
    component.hasImage = false;
    fixture.detectChanges();

    let element = fixture.debugElement.query(By.css('#actor-profile-image-placeholder')).nativeElement;
    expect(element).toBeTruthy();

    element = fixture.debugElement.query(By.css('#awaiting-image-message')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('Awaiting image');
  });

  it('should have an actor image when there is an actor profile image', () => {
    expect(component.hasImage).toBeTruthy();
  });

  it('should have the correct actor name', () => {
    const element = fixture.debugElement.query(By.css('#actor-name')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe(actor.name);
  });

  it('should have the correct actor biography', () => {
    const element = fixture.debugElement.query(By.css('#actor-bio')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe(actor.biography);
  });

  it('should have the correct Filmography heading', () => {
    const element = fixture.debugElement.query(By.css('#filmography-heading')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('Filmography');
  });

  it('should have the an actor filography movie list', () => {
    const element = fixture.debugElement.query(By.css('#movie-list')).nativeElement;
    expect(element).toBeTruthy();
  });
});
