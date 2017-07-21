import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { App } from 'ionic-angular';

import { T2Page } from './../t2/t2';
import { T4Page } from './../t4/t4';
import { T5Page } from './../t5/t5';

import { QRcodePage } from '../q-rcode/q-rcode';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  nativeAudio: NativeAudio;
  platform: Platform;

  constructor(public navCtrl: NavController, private app: App) {
    this.nativeAudio = new NativeAudio  
  }



  onClick(){
    this.navCtrl.push(T2Page);
  }



  ionViewDidLoad(){
    console.log('HOME PAGE');
  }

  //이버튼을 누르면 큐알코드 작동하는 페이지로 넘어감
  QRbutton(){
    this.navCtrl.push(QRcodePage);
  }

  //이버튼을 누르면 노래가 나옴 -> 나중에 메써드 안에 있는 코드를 ionViewDidLoad에 넣으면 페이지 로딩때 노래가 나옴
  PLAY(){
  this.nativeAudio.preloadComplex('test1', 'assets/You-lose-sound-effect.mp3', 1, 1, 0).then(() => {
    this.nativeAudio.play('test1', () => console.log('test1 is done playing'));
  })
  this.nativeAudio.unload('test1');
  }
}
