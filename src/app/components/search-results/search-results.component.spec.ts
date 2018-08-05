import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { SearchResultsComponent } from './search-results.component';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent ],
      imports: [
        RouterTestingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct results list when showing movie results', () => {
    component.isMovieSearch = true;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('#movie-list')).nativeElement;
    expect(element).toBeTruthy();
  });

  it('should show the correct results list when showing actor results', () => {
    component.isMovieSearch = false;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('#actor-list')).nativeElement;
    expect(element).toBeTruthy();
  });

  it('should have a page counter', () => {
    const element = fixture.debugElement.query(By.css('#result-page-count')).nativeElement;
    expect(element).toBeTruthy();
  });

  it('should show the total number of results', () => {
    const element = fixture.debugElement.query(By.css('#result-total-count')).nativeElement;
    expect(element).toBeTruthy();
  });

  it('should have a Previous button', () => {
    const element = fixture.debugElement.query(By.css('#prev-button')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('Previous page');
  });

  it('should have a Next button', () => {
    const element = fixture.debugElement.query(By.css('#next-button')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('Next page');
  });
});
