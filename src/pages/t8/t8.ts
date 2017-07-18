import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T9Page } from "../t9/t9";

/**
 * Generated class for the T8Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-t8',
  templateUrl: 't8.html',
})
export class T8Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T8Page');
  }
  onTap(){
    this.navCtrl.push(T9Page);
  }
}
