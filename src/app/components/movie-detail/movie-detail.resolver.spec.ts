import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { MovieDetailResolver } from './movie-detail.resolver';

describe('MovieDetailResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailResolver],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([MovieDetailResolver], (service: MovieDetailResolver) => {
    expect(service).toBeTruthy();
  }));
});
