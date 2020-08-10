import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadCardComponent } from './abroad-card.component';

describe('AbroadCardComponent', () => {
  let component: AbroadCardComponent;
  let fixture: ComponentFixture<AbroadCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbroadCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
