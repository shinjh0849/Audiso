import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { T5Page } from '../t5/t5';

@Component({
  selector: 'page-t4',
  templateUrl: 't4.html',
})
export class T4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T4Page');
  }
  
  onTq() {
    this.navCtrl.push( T5Page , {}, { animate: false });
    console.log("onTq!");
  }

}
