import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorListResolver } from './components/actor-list/actor-list.resolver';
import { ActorResolver } from './components/actor/actor.resolver';
import { MovieDetailResolver } from './components/movie-detail/movie-detail.resolver';
import { MovieListResolver } from './components/movie-list/movie-list.resolver';

import { ActorComponent } from './components/actor/actor.component';
import { ActorSearchComponent } from './components/actor-search/actor-search.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
  }, {
    path: 'actor/:id',
    component: ActorComponent,
    resolve: {
      actor: ActorResolver
    }
  }, {
    path: 'actor-search',
    component: ActorSearchComponent
  }, {
    path: 'movie/:id',
    component: MovieDetailComponent,
    resolve: {
      movie: MovieDetailResolver
    }
  }, {
    path: 'movie-search',
    component: MovieSearchComponent
  }, {
    path: 'search-results/actors',
    component: SearchResultsComponent,
    resolve: {
      searchResults: ActorListResolver
    },
    runGuardsAndResolvers: 'always'
  }, {
    path: 'search-results/movies',
    component: SearchResultsComponent,
    resolve: {
      searchResults: MovieListResolver
    },
    runGuardsAndResolvers: 'always'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
