import { Component,
         trigger,
         transition,
         style,
         animate,
         group,
         state,
         keyframes
} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { T3Page } from './../t3/t3';
import { T10Page } from './../t10/t10';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-t2',
  templateUrl: 't2.html',
  animations : [
    trigger('bounceIn', [
      state('bounceIn', style({
        
      })),
      transition(':enter', [
        animate(1000, keyframes([
          style({opacity:1, transform: 'translateX(-100%)', offset: 0}),
          style({opacity:1, transform: 'translateX(15px)', offset: 0.3}),
          style({opacity:0, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition(':leave', [
        animate(1000, keyframes([
          style({opacity:1, transform: 'translateX(0)', offset: 0}),
          style({opacity:1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity:0, transform: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class T2Page {
   isBounce: boolean = true;

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
    this.isBounce = (this.isBounce === true) ? false : true;
  }
}
