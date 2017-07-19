import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-t12',
  templateUrl: 't12.html'
})

export class T12Page {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut18Page');
  }

  //더블탭하면 음성메세지가 다시 나와야 됨
  onDoubleTap(e) {
    console.log("음성을 다시 들려줬어요~")
  }

  //싱글탭 는 사실상 shortPress...
  //요걸 하면 다음으로 넘어가야되지만 지금은 아무것도 없음으로 홈페이지로 간다
  onShortPress(e) {
    console.log("shortPress from ShortPressDirective success. Navigating to the next page")
    this.navCtrl.push( HomePage, {}, {animate: false} );
  }

  //왼쪽 스와이프를 하면 뒤로 돌아간다
  onOverDrag(){
    console.log("TQTQT");
    this.navCtrl.pop;
  }
  
}
