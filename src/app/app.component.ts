import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger, keyframes } from '@angular/animations';
import { NgForm } from '@angular/forms';

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
  showExplanation = true;

  // Form Related Variables
  afterTaxIncomeKnown = "option1";
  taxRates = [10, 20, 30, 40, 50, 60];
  afterTaxIncome;
  preTaxIncome;
  chosenTaxRate = "30%";
  submitted = false;
  humanTimes = [0, 0, 0, 0];
  hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  hoursSlept = "8";
  hoursWorked = "8";
  activityOptions = ["Create my own...", "Wash Laundry", "Make Dinner"];
  activityChosen = "Wash Laundry";
  customActivityName = "";
  timeLost = "30";
  activityCost = "15";

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
  onSubmit(form: NgForm) {
    this.submitted = true;
    this.updateHumanTimes();
    this.showExplanation = false;
  }
  updateHumanTimes() {
    let hoursPerDay = 24 - Number(this.hoursSlept) - Number(this.hoursWorked);
    let hoursPerYear = hoursPerDay * 365;
    this.humanTimes[0] = (((this.afterTaxIncome / hoursPerYear) / 4) / 15);
    this.humanTimes[1] = ((this.afterTaxIncome / hoursPerYear) / 4);
    this.humanTimes[2] = (this.afterTaxIncome / hoursPerYear);
    this.humanTimes[3] = (this.afterTaxIncome / hoursPerYear) * 24;
  }
  randomizeForm() {
    let random = Math.floor(Math.random() * 5);
    let rPreTaxIncome = [20000, 50000, 60000, 100000, 250000];
    let rTaxRate = ["20%", "30%", "40%", "50%", "60%"];
    this.preTaxIncome = rPreTaxIncome[random];
    this.chosenTaxRate = rTaxRate[random];
    this.afterTaxIncome = Math.floor(this.preTaxIncome *
                          (1 - (Number(this.chosenTaxRate.slice(0, 2)) / 100)));
  }
  updateActivityForm() {
    if (this.activityChosen == "Wash Laundry") {
      this.timeLost = "30";
      this.activityCost = "15";
    }
    else if (this.activityChosen == "Make Dinner") {
      this.timeLost = "45";
      this.activityCost = "15";
    }
  }
  getActivityName() {
    if (this.activityChosen == "Create my own...") {
      return this.customActivityName;
    }
    return this.activityChosen;
  }
  isSelectedActivity(activity: string) {
    if (activity == "Wash Laundry") {
      return "selected";
    }
    return "";
  }
  doActivity() {
    if ((this.humanTimes[0] * Number(this.timeLost)) <
        Number(this.activityCost)) {
      return true;
    }
    else {
      return false;
    }
  }
}
