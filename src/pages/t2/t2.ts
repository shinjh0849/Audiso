import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T3Page } from './../t3/t3';
import { T10Page } from './../t10/t10';

/**
 * Generated class for the T2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-t2',
  templateUrl: 't2.html',
})
export class T2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T2Page');
  }

  onLongPress(e){
    console.log('longPress success and navigates to page-t12');
    this.navCtrl.push( T3Page, {}, {animate: false} );
  }
}
