import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ActorComponent } from './components/actor/actor.component';
import { ActorSearchComponent } from './components/actor-search/actor-search.component';
import { ActorSummaryComponent } from './components/actor-summary/actor-summary.component';
import { AppTitleComponent } from './components/common/app-title/app-title.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActorComponent,
        ActorListComponent,
        ActorSearchComponent,
        ActorSummaryComponent,
        AppTitleComponent,
        FooterComponent,
        HomeComponent,
        MovieDetailComponent,
        MovieListComponent,
        MovieSearchComponent,
        MovieSummaryComponent,
        NavBarComponent,
        PageNotFoundComponent,
        SearchResultsComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
