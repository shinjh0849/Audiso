import { IndoorAtlas } from 'cordova-plugin-indooratlas/www/IndoorAtlas';
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
      transition('* => void', [
        animate('1s', style({transform: 'translateX(50%)'}))

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public indoor: IndoorAtlas) {
    IndoorAtlas.initialize();
  }
}


