

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Input, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';
import { DomController } from 'ionic-angular';


/**
 * Generated class for the T10Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-t10',
  templateUrl: 't10.html',
})
export class T10Page {

  constructor(public navCtrl: NavController) {
  
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  onTq(){
    this.navCtrl.pop();
  }

  onDoubleTap(e) {
    console.log("singleTap from DoubleTapDirective")
    //this.navCtrl.push(HomePage, {}, { animate: false }); // 다시 들으시려면 탭 두번을 (지금은 처음페이지로 이동)
  }

  onShortPress(e) {
    console.log("shortPress from ShortPressDirective")
    //this.navCtrl.push(T2Page, {}, { animate: false });
  }
}
