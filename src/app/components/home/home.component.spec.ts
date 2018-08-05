import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct welcome title', () => {
    const element = fixture.debugElement.query(By.css('#welcome-title')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('Welcome!');
  });

  it('should have the correct welcome message', () => {
    const element = fixture.debugElement.query(By.css('#welcome-message')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('You can use this app to search for films and actors');
  });
});
