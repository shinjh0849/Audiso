import { T4Page } from './../t4/t4';
import { P1Page } from './../p1/p1';

import { Component,
         trigger,
         transition,
         style,
         animate,
         group,
         state
 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the RecommendPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-recommend',
  templateUrl: 'recommend.html',
  animations : [
    trigger('lightsOnOff', [
      state('m', style({ 
        transform: 'rotate(0deg) translateY(-336px) rotate(0deg)'
      })),
      state('r', style({
        transform: 'rotate(30deg) translateY(-336px) rotate(-30deg)'
      })),
      state('l', style({
        transform: 'rotate(-30deg) translateY(-336px) rotate(30deg)'
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

     trigger('apfhd', [
      state('m', style({ 
        transform: 'rotate(30deg) translateY(-336px) rotate(-30deg)'
      })),
      state('r', style({
        transform: 'rotate(60deg) translateY(-336px) rotate(-60deg)'
      })),
      state('l', style({
        transform: 'rotate(0deg) translateY(-336px) rotate(0deg)'
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')])
    ]),

    trigger('digh', [
      state('m', style({ 
        transform: 'rotate(-30deg) translateY(-336px) rotate(30deg)'
      })),
      state('r', style({
        transform: 'rotate(0deg) translateY(-336px) rotate(0deg)'
      })),
      state('l', style({
        transform: 'rotate(-60deg) translateY(-336px) rotate(60deg)'
      })),
      transition('m<=>r', [animate('0.3s')]),
      transition('m<=>l', [animate('0.3s')]),
      transition('l => m', [animate('0.3s')]),
    ])
  ]
})
export class RecommendPage {
   roomState: string = "m";
   panXi: number = 0;
   panXo: number = 0;
   inneerDefault = 136;
   outerDefault = 109;
   triggered: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendPage');
    this.panXi = this.inneerDefault;
    this.panXo = this.outerDefault
  }
  
  nextP(){
    this.navCtrl.push(T4Page);
  }


  moveButton(e){
      console.log(this.triggered);
      console.log(this.roomState);
      if(e.deltaX >= 50 && this.triggered == false){
        this.triggered = true;
        this.panXi = this.inneerDefault;
        if(this.roomState == 'l')
          this.roomState = 'm';
        else if(this.roomState == 'm')
          this.roomState = 'r';

        
      } else if (e.deltaX <= -50 && this.triggered == false){
        this.triggered = true;
        this.panXi = this.inneerDefault;
        if(this.roomState == 'r')
          this.roomState = 'm';
        else if(this.roomState == 'm')
          this.roomState = 'l'; 
        
      } else {
        this.panXi = this.inneerDefault + e.deltaX;
        if(e.isFinal == true){
          this.panXi = this.inneerDefault;
          this.triggered = false;
        }
      }
  }
}
