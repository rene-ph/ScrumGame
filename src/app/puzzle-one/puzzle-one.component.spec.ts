import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleOneComponent } from './puzzle-one.component';

describe('PuzzleOneComponent', () => {
  let component: PuzzleOneComponent;
  let fixture: ComponentFixture<PuzzleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
