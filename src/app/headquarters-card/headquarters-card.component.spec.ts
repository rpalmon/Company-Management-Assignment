import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadquartersCardComponent } from './headquarters-card.component';

describe('HeadquartersCardComponent', () => {
  let component: HeadquartersCardComponent;
  let fixture: ComponentFixture<HeadquartersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadquartersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadquartersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
