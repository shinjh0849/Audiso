import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Input, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';
import { DomController } from 'ionic-angular';

import { T10Page } from '../t10/t10';
import { T12Page } from '../t12/t12';

@Component({
  selector: 'page-t11',
  templateUrl: 't11.html',
})
export class T11Page {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T11Page');
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
    this.navCtrl.push( T12Page , {}, { animate: false });
  }
}
