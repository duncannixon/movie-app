import { TestBed, inject } from '@angular/core/testing';

import { ActorResolver } from './actor.resolver';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActorResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorResolver],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
    });
  });

  it('should be created', inject([ActorResolver], (service: ActorResolver) => {
    expect(service).toBeTruthy();
  }));
});
