import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { MovieListResolver } from './movie-list.resolver';

describe('MovieListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieListResolver],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([MovieListResolver], (service: MovieListResolver) => {
    expect(service).toBeTruthy();
  }));
});
