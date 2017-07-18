import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LongPressDirective } from '../../directives/long-press/long-press';
import { DoubleTapDirective } from '../../directives/double-tap/double-tap';
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
    this.navCtrl.push( HomePage, {}, {animate: false} );
  }

  onTap(e){
    this.navCtrl.push( Tut13Page, {}, {animate: false} );
  }


  /*
  onSwipeLeft($e){
    if($e.deltaX > 0)
      {
        
      }
    else
      {
        this.navCtrl.push( Tut13Page, {}, {animate: false} );
      }
    
  }
  */

    slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);

    this.navCtrl.push( Tut13Page, {}, {animate: false} );
  }
}
