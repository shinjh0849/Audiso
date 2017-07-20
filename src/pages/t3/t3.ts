import { T4Page } from './../t4/t4';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the T3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-t3',
  templateUrl: 't3.html',
})
export class T3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T3Page');
  }

  onDoubleTap(e) {
    console.log("singleTap from DoubleTapDirective")
    this.navCtrl.push(T4Page, {}, { animate: false }); // 다시 들으시려면 탭 두번을 (지금은 처음페이지로 이동)
  }

}
