import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSectionThreeComponent } from './camp-section-three.component';

describe('CampSectionThreeComponent', () => {
  let component: CampSectionThreeComponent;
  let fixture: ComponentFixture<CampSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampSectionThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
