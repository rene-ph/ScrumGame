import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-card-puzzle-one',
  templateUrl: './card-puzzle-one.component.html',
  styleUrls: ['./card-puzzle-one.component.css'],
  animations: [
    trigger('fadeOut', [
      state('hide', style({ opacity: 0 })),
      transition('* => hide', [
        animate('600ms ease-out')
      ])
    ])
  ]
})
export class CardPuzzleOneComponent implements OnInit {

  @Input()  name: string;

  stateName = '';

  constructor() { }

  ngOnInit() {
  }


  hideElement()  {
    this.stateName = 'hide';
  }
}
