import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAnnouncementComponent } from './footer-announcement.component';

describe('FooterAnnouncementComponent', () => {
  let component: FooterAnnouncementComponent;
  let fixture: ComponentFixture<FooterAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
