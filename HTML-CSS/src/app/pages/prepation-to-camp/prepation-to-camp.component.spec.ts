import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepationToCampComponent } from './prepation-to-camp.component';

describe('PrepationToCampComponent', () => {
  let component: PrepationToCampComponent;
  let fixture: ComponentFixture<PrepationToCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepationToCampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepationToCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
