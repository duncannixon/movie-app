import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppTitleComponent } from './app-title.component';

describe('AppTitleComponent', () => {
  let component: AppTitleComponent;
  let fixture: ComponentFixture<AppTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    const element = fixture.debugElement.query(By.css('#app-title')).nativeElement;
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('THE MOVIE GATEWAY');
  });
});
