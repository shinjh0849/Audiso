import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { T12Page } from '../t12/t12';

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
    console.log('longPress success and navigates to page-t12');
    this.navCtrl.push( T12Page, {}, {animate: false} );
  }
}
