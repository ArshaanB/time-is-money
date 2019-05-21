import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger, keyframes } from '@angular/animations';

// Colour Palette: https://www.color-hex.com/color-palette/700

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
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
    trigger('bodyAnimation', [
      state('void', style({
        opacity: 0
      })),
      state('notvoid', style({
        opacity: 1
      })),
      transition('* => *', [
        animate('1s 0.5s ease-in')
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isHeaderAnimation = 'notvoid';
  isLogoAnimation = 'void';
  displayHeader = true;
  displayBody = false;
  isBodyAnimation = 'void';

  ngOnInit() {}
  constructor() {}

  getHeaderAnimation() {
    return this.isHeaderAnimation;
  }
  getLogoAnimation() {
    return this.isLogoAnimation;
  }
  getBodyAnimation() {
    return this.isBodyAnimation;
  }
  onAnimationEventStart(event: AnimationEvent){
    this.isLogoAnimation = 'notvoid';
  }
  onAnimationEventDone(event: AnimationEvent) {
    this.displayHeader = false;
    this.displayBody = true;
    this.isBodyAnimation = 'notvoid';
  }

}
