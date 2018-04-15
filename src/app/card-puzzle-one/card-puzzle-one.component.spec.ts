import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPuzzleOneComponent } from './card-puzzle-one.component';

describe('CardPuzzleOneComponent', () => {
  let component: CardPuzzleOneComponent;
  let fixture: ComponentFixture<CardPuzzleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPuzzleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPuzzleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
