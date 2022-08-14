import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkeletonComponent } from './list-skeleton.component';

describe('ListSkeletonComponent', () => {
  let component: ListSkeletonComponent;
  let fixture: ComponentFixture<ListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
