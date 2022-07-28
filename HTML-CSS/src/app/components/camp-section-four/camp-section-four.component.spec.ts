import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSectionFourComponent } from './camp-section-four.component';

describe('CampSectionFourComponent', () => {
  let component: CampSectionFourComponent;
  let fixture: ComponentFixture<CampSectionFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampSectionFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampSectionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
