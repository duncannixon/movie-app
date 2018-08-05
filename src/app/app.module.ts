import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ApiService } from './services/api.service';
import { MovieListResolver } from './components/movie-list/movie-list.resolver';

import { ActorComponent } from './components/actor/actor.component';
import { ActorSummaryComponent } from './components/actor-summary/actor-summary.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
import { ActorSearchComponent } from './components/actor-search/actor-search.component';

@NgModule({
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
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    MovieListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
