import { Component,
         trigger,
         transition,
         style,
         animate,
         group,
         state
 } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T3Page } from './../t3/t3';
import { T10Page } from './../t10/t10';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the T2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-t2',
  templateUrl: 't2.html',
  animations : [
    trigger('lightsOnOff', [
      state('off', style({
         transform:  'rotate(0deg) translateY(150px) rotate(0deg)' 
      })),
      state('on', style({
        transform: 'rotate(360deg) translateY(150px) rotate(-360deg)'
      })),
      transition('off <=>on', [animate('3s'
      )])
      
    ])
  ]
})
export class T2Page {
   roomState: string = "off";

  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T2Page');
    
  }

  onLongPress(e){
    console.log('longPress success and navigates to page-t12');
    this.navCtrl.push( T3Page, {}, {animate: false} );
  }

  goToSlide(){
    this.slides.slideTo(1);
  }
  toggle(){
    this.roomState = (this.roomState === "off") ? "on" : "off";
  }
}
