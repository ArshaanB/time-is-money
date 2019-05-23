import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger, keyframes } from '@angular/animations';

// Colour Palette: https://www.color-hex.com/color-palette/700

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // 0s -> 5s
    trigger('attentionAnimation', [
      state('void', style({ opacity: 0 })),
      state('notvoid', style({ opacity: 0 })),
      transition('void => notvoid', [
        animate('5s', keyframes([
          style({ opacity: 1, offset: 0.2 }),
          style({ opacity: 1, offset: 0.6 }),
          style({ opacity: 0, offset: 1 })
        ]))
      ])
    ]),
    trigger('logoAnimation', [
      state('void', style({ opacity: 0 })),
      state('notvoid', style({ opacity: 1 })),
      transition('void => notvoid', [ animate('1s 0s ease-in') ])
    ]),
    trigger('body1Animation', [
      state('void', style({ opacity: 0 })),
      state('notvoid', style({ opacity: 1 })),
      transition('void => notvoid', [ animate('1s 1s ease-in') ])
      // 1s
    ]),
    trigger('body2Animation', [
      state('void', style({ opacity: 0 })),
      state('notvoid', style({ opacity: 1 })),
      transition('void => notvoid', [ animate('1s 2.5s ease-in') ])
      // 2.5s
    ]),
    trigger('body3Animation', [
      state('void', style({ opacity: 0 })),
      state('notvoid', style({ opacity: 1 })),
      transition('void => notvoid', [ animate('2s 4.5s ease-in') ])
      // 4.5s
    ]),
    trigger('body4Animation', [
      state('void', style({ opacity: 0 })),
      state('notvoid', style({ opacity: 1 })),
      transition('void => notvoid', [ animate('2s 7s ease-in') ])
      // 7s
    ]),
    trigger('body5Animation', [
      state('void', style({ opacity: 0 })),
      state('notvoid', style({ opacity: 1 })),
      transition('void => notvoid', [ animate('2s 9s ease-in') ])
      // 9s
    ])
  ]
})
export class AppComponent implements OnInit {
  // UI/UX Related Variables
  displayAttention = true;
  isAttentionAnimation = 'notvoid';
  isLogoAnimation = 'void';
  isBody1Animation = 'void';
  isBody2Animation = 'void';
  isBody3Animation = 'void';
  isBody4Animation = 'void';
  isBody5Animation = 'void';
  displayBody = false;
  option1;

  // Form Related Variables
  taxRates = [10, 20, 30, 40, 50, 60];
  afterTaxIncome;
  afterTaxIncomeKnown = false;

  ngOnInit() {}
  constructor() {}

  onAttentionAnimationDone(event: AnimationEvent) {
    this.displayAttention = false;
    this.displayBody = true;
    this.isLogoAnimation = 'notvoid';
    this.isBody1Animation = 'notvoid';
    this.isBody2Animation = 'notvoid';
    this.isBody3Animation = 'notvoid';
    this.isBody4Animation = 'notvoid';
    this.isBody5Animation = 'notvoid';
  }
  isSelected(rate: number) {
    if (rate == 30) {
      return "selected";
    }
    return "";
  }
}
