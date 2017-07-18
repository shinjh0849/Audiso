import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LongPressDirective } from '../../directives/long-press/long-press';
import { DoubleTapDirective } from '../../directives/double-tap/double-tap';
import { ShortPressDirective } from '../../directives/short-press/short-press';
import { T7Page } from '../t7/t7';
import { HomePage } from '../home/home';
import { T5Page } from "../t5/t5";


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

  onDoubleTap(e) {
    console.log("singleTap from DoubleTapDirective")
    this.navCtrl.push(HomePage, {}, { animate: false });
  }

  onShortPress(e) {
    console.log("shortPress from ShortPressDirective")
<<<<<<< HEAD:src/pages/t12/t12.ts
    this.navCtrl.push( T7Page, {}, {animate: false} );
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);

    this.navCtrl.push( T7Page, {}, {animate: false} );
=======
    this.navCtrl.push(T5Page, {}, { animate: false });
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);

    this.navCtrl.push(Tut13Page, {}, { animate: false });
>>>>>>> EunJi:src/pages/tut18/tut18.ts
  }
}
