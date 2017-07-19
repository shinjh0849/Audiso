import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { T7Page } from '../t7/t7';

@Component({
  selector: 'page-t6',
  templateUrl: 't6.html',
})
export class T6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T6Page');
  }



    on3Touch(e){
      console.log('3 finger touch swipe success (지금은 아직 tap으로 되어있음)');
      this.navCtrl.push( T7Page, {}, {animate: false} );
  }
}
