import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTilesComponent } from './display-tiles.component';

describe('DisplayTilesComponent', () => {
  let component: DisplayTilesComponent;
  let fixture: ComponentFixture<DisplayTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
