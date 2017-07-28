import { Component, 
         trigger,
         state,
         style,
         transition,
         animate,
         keyframes,
         group
} from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

  /**
 * Generated class for the AniiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-anii',
  templateUrl: 'anii.html',
  animations : [
    trigger('lightsOnOff', [
      state('off', style({
        backgroundColor: 'black'
        
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('off <=>on', [animate('2s', style({transform: 'rotate(90deg)'}))]),
    ])
  ]
})
export class AniiPage {

  roomState: string = "off";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AniiPage');
  }

  toggleLights() {
    this.roomState = (this.roomState === "off") ? "on" : "off";
    
  }
}
