import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct heading', () => {
    const element = fixture.debugElement.query(By.css('#heading')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe(`Sorry, we can't find that page`);
  });

  it('should have a page not found message', () => {
    const element = fixture.debugElement.query(By.css('#page-not-found-message')).nativeElement;
    expect(element).toBeTruthy();
  });
});
