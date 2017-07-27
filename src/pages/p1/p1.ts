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
          top: '-90.5px',
          width: '740px',
          height: '740px'
      })),
      
      transition('none => first', [
        animate('0.8s 0.3s')
      ]),
    
      transition('first => second', [
        animate('0.5s')
    
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

    ])

  ]
 /*
 .qlo{
        position: absolute;
        padding: 0;
        border: 0;
        left: 145.4688px;
        top: 617.4645px;
        width: 62.2813px;
        height: 27.5px;
    }
      */

  
})


export class P1Page {

  showText: boolean = true;
  showCircleUp: string = "none";
  showQloUp: string = "none";
  
  ionViewDidLoad() {
    this.showCircleUp = (this.showCircleUp === "none" ? "first" : "none");
    this.showQloUp = (this.showQloUp === "none" ? "first" : "none");
  }
  

  upCircle(){
    this.showCircleUp = (this.showCircleUp === "first" ? "second" : "first");
    this.showQloUp = (this.showQloUp === "first" ? "second" : "first");
  }
  
}


