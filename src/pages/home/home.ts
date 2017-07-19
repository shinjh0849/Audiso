import { OnInit, Component, ViewChild, Directive } from '@angular/core';
import { NavController, NavParams, Slides, IonicApp } from 'ionic-angular';

import { T6Page } from '../t6/t6';
import { T7Page } from '../t7/t7';
import { T9Page } from '../t9/t9';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [T7Page],
  
})


export class HomePage {


  constructor(public navCtrl: NavController,) {
  }

  @ViewChild(Slides) slides: Slides;

  slideChanged(){
    //let currentIndex = this.slides.getActiveIndex();
    //console.log('Current index is', currentIndex);
    this.navCtrl.push( T9Page, {}, {animate: false} );
  }
}
