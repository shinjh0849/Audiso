import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-p1',
  templateUrl: 'p1.html',
  animations: [
    trigger('flyOut', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.4s')
      ])
    ]), 
    ////
    trigger('flyCircleUp', [
      state('none', style({
          padding: '0',
          border: '0',
          left: '-190px',
          top: '1000.5px',
          width: '740px',
          height: '740px'
      })),
      state('first', style({
          padding: '0',
          border: '0',
          left: '-190px',
          top: '559.5px',
          width: '740px',
          height: '740px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '-190px',
          top: '-60.5px',
          width: '740px',
          height: '740px'
      })),
          state('third', style({
          padding: '0',
          border: '0',
          left: '-190px',
          top: '369.5px',
          width: '740px',
          height: '740px'
      })),
      transition('none => first', [
        animate('0.8s 0.3s')
      ]),
      transition('first => second', [
        animate('0.2s')
      ]),
      transition('second => third', [
        animate('2s',  keyframes([
        style({ top: '-50px', offset: 0.2}),
        style({ top: '369.5px', offset: 1.0})
      ]))
      ])
    ])
   ,
    trigger('flyQloUp', [
      state('none', style({
          padding: '0',
          border: '0',
          left: '145.4688px',
          top: '1000px',
          width: '62.2813px',
          height: '27.5px'
      })),
      state('first', style({
          padding: '0',
          border: '0',
          left: '145.4688px',
          top: '617.4645px',
          width: '62.2813px',
          height: '27.5px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '145.4688px',
          top: '-140px',
          width: '62.2813px',
          height: '27.5px'
      })),
            transition('none => first', [
        animate('0.8s 0.3s')
      ]),
      transition('first => second', [
        animate('0.1s')
      ])
    ]),
    /////////////////////////////
      trigger('flyRecoUp', [
      state('first', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '1000px', // 빠르기 조절
          width: '107.4758px',
          height: '16.75px'
      })),
        // 
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '124.375px',
          width: '107.4758px',
          height: '16.75px'
      })),
      transition('first => second', [
        animate('0.2s')
      ])
    ]),
      trigger('flyT3Up', [
      state('first', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '1000px', //
          width: '302.4643px',
          height: '154px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '186.5625px',
          width: '302.4643px',
          height: '154px'
      })),
      transition('first => second', [
        animate('0.2s')
      ])
    ]),
      trigger('flyT4Up', [
      state('first', style({
        padding: '0',
          border: '0',
          left: '32.5px',
          top: '1000px', //
          width: '289.8368px',
          height: '63.75px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '373.125px',//
          width: '289.8368px',
          height: '63.75px'
      })),
      transition('first => second', [
        animate('0.2s')
      ])
    ]),
      trigger('flyBUp', [
      state('first', style({
       padding: '0',
          border: '0',
          left: '109.1475px',
          top: '1000px', //
          width: '145.7205px',
          height: '145.7205px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '109.1475px',
          top: '497.5px', 
          width: '145.7205px',
          height: '145.7205px'
      })),
     state('rotate', style({
       padding: '0',
       border: '0',
       left: '109.1475px',
       top: '497.5px', 
       width: '145.7205px',
       height: '145.7205px'
     })),
      transition('first => second', [
        animate('0.2s')
      ]),
       transition('second => rotate', [
        animate('2s', style({transform: 'rotate(1000deg)'})) // 음성인식으로 고치기
      ])
    ])
  ]
  
})


export class P1Page {

  showText: boolean = true;
  showCircleUp: string = "none";
  showQloUp: string = "none";
  showRecoUp: string = "first";
  showT3Up: string = "first";
  showT4Up: string = "first";
  showBUp: string = "first";
  
  ionViewDidLoad() {
    this.showCircleUp = (this.showCircleUp === "none" ? "first" : "none");
    this.showQloUp = (this.showQloUp === "none" ? "first" : "none");
  }
  

  upCircle(){
    this.showCircleUp = (this.showCircleUp === "first" ? "second" : "first");
    this.showQloUp = (this.showQloUp === "first" ? "second" : "first");
    this.showRecoUp = (this.showRecoUp === "first" ? "second" : "first");
    this.showT3Up = (this.showT3Up === "first" ? "second" : "first");
    this.showT4Up = (this.showT4Up === "first" ? "second" : "first");
    this.showBUp = (this.showBUp === "first" ? "second" : "first");
  }
  rotate(){ // 버튼 클릭해
    this.showBUp = (this.showBUp === "second" ? "rotate" : "second");
  }
  onNext(){
    this.showCircleUp = (this.showCircleUp === "second" ? "third" : "second");
  }
  
}


