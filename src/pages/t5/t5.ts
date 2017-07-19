import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T6Page } from "../t6/t6";

/**
 * Generated class for the T5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-t5',
  templateUrl: 't5.html',
})
export class T5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T5Page');
  }
  
  onNext(){
    this.navCtrl.push(T6Page); 
  }
}
