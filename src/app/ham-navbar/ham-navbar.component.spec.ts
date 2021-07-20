import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamNavbarComponent } from './ham-navbar.component';

describe('HamNavbarComponent', () => {
  let component: HamNavbarComponent;
  let fixture: ComponentFixture<HamNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
