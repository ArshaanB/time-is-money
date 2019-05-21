import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger, keyframes } from '@angular/animations';

// Colour Palette: https://www.color-hex.com/color-palette/700

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // 0s -> 5s
    trigger('headerAnimation', [
      state('void', style({
        opacity: 0
      })),
      state('notvoid', style({
        opacity: "*"
      })),
      transition('* => *', [
        animate('5s', keyframes([
          style({ opacity: 1, offset: 0.2 }),
          style({ opacity: 1, offset: 0.6 }),
          style({ opacity: 0, offset: 1 })
        ]))
      ])
    ]),
    // 0s -> 5s
    trigger('logoAnimation', [
      state('void', style({
        opacity: 0
      })),
      state('notvoid', style({
        opacity: 1
      })),
      transition('* => *', [
        animate('1s 5s ease-in')
      ])
    ]),
    trigger('body1Animation', [
      state('void', style({
        opacity: 0
      })),
      state('notvoid', style({
        opacity: 1
      })),
      transition('* => void', [
        animate('1s')
      ]),
      transition('* => *', [
        animate('1s 1s ease-in')
      ])
    ]),
    trigger('body2Animation', [
      state('void', style({
        opacity: 0
      })),
      state('notvoid', style({
        opacity: 1
      })),
      transition('* => void', [
        animate('1s')
      ]),
      transition('* => *', [
        animate('1s 2.5s ease-in')
      ])
    ]),
    trigger('body3Animation', [
      state('void', style({
        opacity: 0
      })),
      state('notvoid', style({
        opacity: 1
      })),
      transition('* => void', [
        animate('1s')
      ]),
      transition('* => *', [
        animate('2s 4.5s ease-in')
      ])
    ]),
    trigger('body4Animation', [
      state('void', style({
        opacity: 0
      })),
      state('notvoid', style({
        opacity: 1
      })),
      transition('* => void', [
        animate('1s')
      ]),
      transition('* => *', [
        animate('2s 7s ease-in')
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isHeaderAnimation = 'notvoid';
  isLogoAnimation = 'void';
  displayHeader = true;
  displayBody = false;
  isBody1Animation = 'void';
  isBody2Animation = 'void';
  isBody3Animation = 'void';
  isBody4Animation = 'void';
  startingBody = true;

  ngOnInit() {}
  constructor() {}

  getHeaderAnimation() {
    return this.isHeaderAnimation;
  }
  getLogoAnimation() {
    return this.isLogoAnimation;
  }
  onAnimationEventStart(event: AnimationEvent){
    this.isLogoAnimation = 'notvoid';
  }
  onAnimationEventDone(event: AnimationEvent) {
    this.displayHeader = false;
    this.displayBody = true;
    this.isBody1Animation = 'notvoid';
    this.isBody2Animation = 'notvoid';
    this.isBody3Animation = 'notvoid';
    this.isBody4Animation = 'notvoid';
  }
}
