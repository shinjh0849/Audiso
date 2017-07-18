import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LongPressDirective } from '../../directives/long-press/long-press';
import { DoubleTapDirective } from '../../directives/double-tap/double-tap';
import { ShortPressDirective } from '../../directives/short-press/short-press';
import { T7Page } from '../t7/t7';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-t12',
  templateUrl: 't12.html'
})

export class T12Page {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut18Page');
  }

  onDoubleTap(e){
    console.log("singleTap from DoubleTapDirective")
    this.navCtrl.push( HomePage, {}, {animate: false} );
  }

  onShortPress(e){
    console.log("shortPress from ShortPressDirective")
    this.navCtrl.push( T7Page, {}, {animate: false} );
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);

    this.navCtrl.push( T7Page, {}, {animate: false} );
  }
}
