import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSectionTwoComponent } from './camp-section-two.component';

describe('CampSectionTwoComponent', () => {
  let component: CampSectionTwoComponent;
  let fixture: ComponentFixture<CampSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampSectionTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
