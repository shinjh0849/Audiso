import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-tutorial2',
  templateUrl: 'tutorial2.html',

  animations: [
    // 시작하는 원
    trigger('startCircle', [
      state('off', style({
        left: '-740px'
      })),
      state('on', style({
        left: '*'
      })),
      transition('off=>on', [
        animate('500ms 800ms', keyframes([
          style({left: '-740px', offset: 0}),
          style({left: '-330px', offset: 0.8}),
          style({left: '-360px', offset: 1}),
        ]))
      ]),
    ]),

    // 첫번째 나오는 텍스트
    trigger('text1', [
      state('off', style({
        left: '-740px'
      })),
      state('on', style({
        left: '*'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
         animate('1000ms 1000ms', keyframes([
          style({left: '-740px', offset: 0}),
          style({left: '-330px', offset: 0.8}),
          style({left: '-360px', offset: 1}),
        ]))
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),

    // 두 번째 나오는 텍스트
    trigger('text2', [
      state('off', style({
        left: '-740px'
      })),
      state('on', style({
        left: '*'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('500ms 150ms')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ]),

    //세번째 나오는 텍스트
    trigger('text3', [
      state('off', style({
        left: '-740px'
      })),
      state('on', style({
        left: '*'
      })),
      state('d', style({
        opacity: 0
      })),
      transition('off=>on', [
        animate('500ms 150ms')
      ]),
      transition('on=>d', [
        animate('100ms')
      ])
    ])

  ]
})
export class Tutorial2Page {

  startState: string = "off";
  text1State: string = "off";
  text2State: string = "off";
  text2State1: string = "off";
  text3State: string = "off";


  tts1: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  onLongPress(e) {
    console.log(this.startState);
    this.text1State = "d";
    this.text2State = "on";
    this.text2State1 = "on";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tutorial2Page');

    this.tts.speak('소망님을 위한 똑똑한 쇼핑 친구 유니와 클로를 이용해 보세요')
      .then(() => this.tts1 = true)
      .catch((reason: any) => this.tts1 = true);
    //.catch((reason: any) => console.log(reason));
    if (this.tts1 == true) {
      this.startState = "on"
    }
    console.log(this.tts1);
    this.startState = "on";
    this.text1State = "on";
  }

  clickEvent() {
    this.text2State1 = "d";
    this.text3State = "on";
  }


}
