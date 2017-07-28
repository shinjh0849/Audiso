import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Input, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';
import { DomController } from 'ionic-angular';

import { T5Page } from '../t5/t5';

@Component({
  selector: 'page-t4',
  templateUrl: 't4.html',
})
export class T4Page {

  abc: number = 0;
  defaultX: number = 71.25;
  triggered: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public element: ElementRef, public renderer: Renderer, public domCtrl: DomController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T4Page');
    this.abc = this.defaultX;
  }
  
  onToRight() {
    this.navCtrl.push( T5Page );
    //this.navCtrl.push( T5Page , {}, { animate: false });
    console.log("onTR!");
  }

  onDoubleTap(e) {
    console.log("singleTap from DoubleTapDirective")
    //this.navCtrl.push(HomePage, {}, { animate: false }); // 다시 들으시려면 탭 두번을 (지금은 처음페이지로 이동)
  }

  onShortPress(e) {
    console.log("shortPress from ShortPressDirective")
    //this.navCtrl.push(T2Page, {}, { animate: false });
  }

  digh(e){
    //this.abc = this.defaultX + e.deltaX;
    console.log(this.abc);
    console.log(e);

    if( e.deltaX >= 128.5 && !this.triggered){
        this.triggered = true;
        this.abc = 200;
        this.navCtrl.pop();

     } else if (this.abc < 195) {
          this.abc = this.defaultX + e.deltaX;
          if(e.isFinal == true){
            this.abc = this.defaultX;
            this.triggered = false;
          }
     }
          
  }

  ehfdkrk(){
    this.navCtrl.pop();
  }
  
}
