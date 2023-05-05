import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingListingsComponent } from './building-listings.component';

describe('BuildingListingsComponent', () => {
  let component: BuildingListingsComponent;
  let fixture: ComponentFixture<BuildingListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
