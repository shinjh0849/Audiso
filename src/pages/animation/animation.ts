import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-animation',
  template: `<h1>{{title}}</h1>
            <button (click) = "toggleDiv()">ToggleDiv</button> 
            <div *ngIf="showDiv" [@flyInOut]> FLYINOUT </div>
  `,
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({transform: 'translateX(-700%)'}),
        animate('1s')
      ]),
      transition(':leave', [
        animate('1s', style({transform: 'translateX(600%)'}))
      ])
    ])
  ]
})

export class AnimationPage {
  title = 'Angular Animation';
  showDiv: boolean = true;
  toggleDiv(){
    this.showDiv = this.showDiv ? false : true;
  }
}


