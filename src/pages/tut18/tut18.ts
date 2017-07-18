import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LongPressDirective } from '../../directives/long-press/long-press';
import { DoubleTapDirective } from '../../directives/double-tap/double-tap';
import { ShortPressDirective } from '../../directives/short-press/short-press';
import { Tut13Page } from '../tut13/tut13';
import { HomePage } from '../home/home';





@Component({
  selector: 'page-tut18',
  templateUrl: 'tut18.html'
})

export class Tut18Page {

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
    this.navCtrl.push( Tut13Page, {}, {animate: false} );
  }

    slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);

    this.navCtrl.push( Tut13Page, {}, {animate: false} );
  }
}
