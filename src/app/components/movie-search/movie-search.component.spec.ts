import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { MovieSearchComponent } from './movie-search.component';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchComponent ],
      imports: [
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    const element = fixture.debugElement.query(By.css('#search-title')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('Movie Search');
  });

  it('should have an input field', () => {
    const element = fixture.debugElement.query(By.css('#search-term')).nativeElement;
    expect(element).toBeTruthy();
  });

  it('should have an input field', () => {
    const element = fixture.debugElement.query(By.css('#search-button')).nativeElement;
    expect(element).toBeTruthy();
  });
});
