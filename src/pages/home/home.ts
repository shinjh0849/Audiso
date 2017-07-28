import { AniiPage } from './../anii/anii';
import { Component } from '@angular/core';
import { App, NavController, NavParams, Platform } from 'ionic-angular';

import { T2Page } from './../t2/t2';
import { T4Page } from './../t4/t4';
import { T5Page } from './../t5/t5';


import { QRcodePage } from '../q-rcode/q-rcode';
import { NativeAudio } from '@ionic-native/native-audio';
import { IndoorAtlas } from 'cordova-plugin-indooratlas/www/IndoorAtlas';

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

    // onSuccess Callback
    onSuccess() {
        alert('IndoorAtlas was successfully initialized');
    };

    // onError Callback receives a PositionError object
    onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    };




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

  bounce(){
    
  }

  //애니메이션 페이지 시험용
  onPress(){
    this.navCtrl.push(AniiPage);
  }
  
      
}
