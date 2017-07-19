import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { T8Page } from '../t8/t8';

@Component({
  selector: 'page-t7',
  templateUrl: 't7.html',
})
export class T7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut13Page');
  }

  onLongPress(e){
    console.log('longPress success and navigates to page-t8');
    this.navCtrl.push( T8Page, {}, {animate: false} );
  }
}
