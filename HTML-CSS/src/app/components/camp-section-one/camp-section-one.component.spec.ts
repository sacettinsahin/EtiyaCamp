import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSectionOneComponent } from './camp-section-one.component';

describe('CampSectionOneComponent', () => {
  let component: CampSectionOneComponent;
  let fixture: ComponentFixture<CampSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampSectionOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
