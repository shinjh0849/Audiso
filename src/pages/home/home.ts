import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { App } from 'ionic-angular';

import { T4Page } from './../t4/t4';
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
    //this.navCtrl.push(T4Page);
  }

  QRbutton(){
    this.navCtrl.push(QRcodePage);
  }

  ionViewDidLoad(){
    console.log('HOME PAGE');
  }

  //이걸 ionViewDidLoad 메써드에 넣게 되면 자동적으로 노래가 나온다
  PLAY(){
  this.nativeAudio.preloadComplex('test1', 'assets/You-lose-sound-effect.mp3', 1, 1, 0).then(() => {
    this.nativeAudio.play('test1', () => console.log('test1 is done playing'));
  })
  this.nativeAudio.unload('test1');
  }
}
