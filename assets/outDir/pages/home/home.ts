import { OnInit, Component, ViewChild, Directive } from '@angular/core';
import { NavController, NavParams, Slides, IonicApp } from 'ionic-angular';
import { Tut13Page } from '../tut13/tut13';
import { LongPressDirective } from '../../directives/long-press/long-press';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Tut13Page],
  
})


export class HomePage {


  constructor(public navCtrl: NavController,) {
  }

  @ViewChild(Slides) slides: Slides;

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);

    this.navCtrl.push( Tut13Page, {}, {animate: false} );
  }

  onLongPress(e){
    this.navCtrl.push( Tut13Page, {}, {animate: false} );
  }

}
