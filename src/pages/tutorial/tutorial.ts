import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
   animations: [
     trigger('fly1', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-500px',
          top: '0px',
          width: '740px',
          height: '740px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '-370px',
          top: '0px',
          width: '740px',
          height: '740px'
      })),
      transition('first => second', [
        animate('1s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
    trigger('fly2', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-100px',
          top: '124.375px',
          width: '57.25px'
      })),
      state('second', style({
         padding: '0',
          border: '0',
          left: '32.5px',
          top: '124.375px',
          width: '57.25px'
      })),
      transition('first => second', [
        animate('1s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
      trigger('fly3', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-100px',
          top: '186.6px',
          width: '236px'
      })),
      state('second', style({
         padding: '0',
          border: '0', 
          left: '32.5px',
          top: '186.6px',
          width: '236px'
      })),
      transition('first => second', [
        animate('1s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
      trigger('fly4', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-100px',
          top: '435px',
          width: '134px'
      })),
      state('second', style({
         padding: '0',
         border: '0',
         left: '32.5px',
         top: '435px',
         width: '134px'
      })),
      transition('first => second', [
        animate('1s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),         
      trigger('fly5', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-100px',
          top: '497.5px',
          width: '107px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '126px',
          top: '497.5px',
          width: '107px'
      })),
      transition('first => second', [
        animate('1s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
    /////////
    trigger('fly6', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '132.75px',
          width: '73.5px'
        })),
      state('second', style({
         padding: '0',
          border: '0',   
          left: '32.5px',
          top: '132.75px',
          width: '73.5px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
    trigger('fly7', [
     state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-300px',
          top: '200px',
          width: '262px'
      })),
      state('second', style({
         padding: '0',
          border: '0', 
          left: '32.5px',
          top: '200px',
          width: '262px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
      trigger('fly8', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '400px',
          width: '125px'
      })),
      state('second', style({
         padding: '0',
          border: '0', 
          left: '32.5px',
          top: '400px',
          width: '125px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
      trigger('fly9', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '515px',
          width: '84.5px'
      })),
      state('second', style({
         padding: '0',
         border: '0',
         left: '135px',
         top: '515px',
         width: '84.5px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),         
      trigger('fly10', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '650px',
          width: '68.75px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '650px',
          width: '68.75px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]), 
    ///////////////
          trigger('fly11', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-300px',
          top: '186.5625px',
          width: '263.066px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '186.5625px',
          width: '263.066px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
      trigger('fly12', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '373.0757px',
          width: '179.69675px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '373.0757px',
          width: '179.69675px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
     
      trigger('fly14', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '477.99225px',
          width: '84.61525px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '200.25px',
          top: '477.99225px',
          width: '84.61525px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
       trigger('fly15', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '477.99225px',
          width: '84.61525px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '71.25px',
          top: '477.99225px',
          width: '84.61525px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
       trigger('fly16', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '650px',
          width: '68.75px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '650px',
          width: '68.75px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
    /////////////////
      trigger('fly17', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-300px',
          top: '564.693px',
          width: '84.61525px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '137.75px',
          top: '564.693px',
          width: '84.61525px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),

      trigger('fly18', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '455.376px',
          width: '84.61525px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '137.75px',
          top: '455.376px',
          width: '84.61525px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),

          trigger('fly19', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-300px',
          top: '186.5625px',
          width: '263.066px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '186.5625px',
          width: '263.066px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),

          trigger('fly20', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '407.07575px',
          width: '179.69675px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '407.07575px',
          width: '179.69675px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),

          trigger('fly21', [
       state('disA', style({
         opacity: 0
      })),
       state('first', style({
          padding: '0',
          border: '0',
          left: '-200px',
          top: '650px',
          width: '68.75px'
      })),
      state('second', style({
          padding: '0',
          border: '0',
          left: '32.5px',
          top: '650px',
          width: '68.75px'
      })),
      transition('first => second', [
        animate('0.5s')
      ]),
      transition('second => disA', [
        animate('0.01s')
      ])
    ]),
]})

export class TutorialPage {
  show1: string = "first";
  show2: string = "first";
  show3: string = "first";
  show4: string = "first";
  show5: string = "first"; 
 
  show6 : string = "first";
  show7 : string = "first";
  show8 : string = "first";
  show9 : string = "first";
  show10: string = "first"; 
  
  show11 : string = "first"; 
  show12 : string = "first";
  show14 : string = "first";
  show15 : string = "first";
  show16 : string = "first"; 

  show17 : string = "first"; 
  show18 : string = "first";
  show19 : string = "first";
  show20 : string = "first";
  show21 : string = "first"; 

  xxx: number = 0;
  yyy: number = 0;
  defaultX: number = 71.25;
  defaultY: number = 455;
  triggered: boolean = false;
  
  ionViewDidLoad() {
    this.show1 = (this.show1 === "first" ? "second" : "first");
    this.show2 = (this.show2 === "first" ? "second" : "first");
    this.show3 = (this.show3 === "first" ? "second" : "first");
    this.show4 = (this.show4 === "first" ? "second" : "first");
    this.show5 = (this.show5 === "first" ? "second" : "first");
        this.xxx = this.defaultX;
        this.yyy = this.defaultY;
  }
  onLongPress(e){
    this.show2 = (this.show2 === "second" ? "disA" : "second");
    this.show3 = (this.show3 === "second" ? "disA" : "second");
    this.show4 = (this.show4 === "second" ? "disA" : "second");
    this.show5 = (this.show5 === "second" ? "disA" : "second");
    
    this.show6 = (this.show6 === "first" ? "second" : "first");
    this.show7 = (this.show7 === "first" ? "second" : "first");
    this.show8 = (this.show8 === "first" ? "second" : "first");
    this.show9 = (this.show9 === "first" ? "second" : "first");
    this.show10 = (this.show10 === "first" ? "second" : "first");
  }

  onDoubleTap(){
    // 두근두근하는거 해야한다.


    this.show7 = (this.show7 === "second" ? "disA" : "second");
    this.show8 = (this.show8 === "second" ? "disA" : "second");
    this.show9 = (this.show9 === "second" ? "disA" : "second");
    this.show10 = (this.show10 === "second" ? "disA" : "second");
    
    this.show11 = (this.show11 === "first" ? "second" : "first");
    this.show12 = (this.show12 === "first" ? "second" : "first");
    this.show14 = (this.show14 === "first" ? "second" : "first");
    this.show15 = (this.show15 === "first" ? "second" : "first");
    this.show16 = (this.show16 === "first" ? "second" : "first");
  
  }


  onNext(e){
  


    if( e.deltaX >= 128.5 && !this.triggered){ 
        this.triggered = true;
        this.xxx = 200;
        // 다음 에니메이션이 발생하게 한다.
        this.show11 = (this.show11 === "second" ? "disA" : "second");
        this.show12 = (this.show12 === "second" ? "disA" : "second");
        this.show14 = (this.show14 === "second" ? "disA" : "second");
        this.show15 = (this.show15 === "second" ? "disA" : "second");
        this.show16 = (this.show16 === "second" ? "disA" : "second");

        this.show17 = (this.show17 === "first" ? "second" : "first");
        this.show18 = (this.show18 === "first" ? "second" : "first");
        this.show19 = (this.show19 === "first" ? "second" : "first");
        this.show20 = (this.show20 === "first" ? "second" : "first");
        this.show21 = (this.show21 === "first" ? "second" : "first");
        



     } else if (this.xxx < 195) { // 놓았을 때 원래 위치로 오게 하는 것
          this.xxx = this.defaultX + e.deltaX;
          if(e.isFinal == true){
            this.xxx = this.defaultX;
            this.triggered = false;
          }
     }
          
  }

onNext2(e){
    //this.abc = this.defaultX + e.deltaX;
    console.log(this.yyy);
    console.log(e.deltaY);

    if( e.deltaY >= 110 && !this.triggered){ 
        this.triggered = true;
        
        // 다음 에니메이션이 발생하게 한다.
        this.show17 = (this.show17 === "second" ? "disA" : "second");
        this.show18 = (this.show18 === "second" ? "disA" : "second");
        this.show19 = (this.show19 === "second" ? "disA" : "second");
        this.show20 = (this.show20 === "second" ? "disA" : "second");
        this.show21 = (this.show21 === "second" ? "disA" : "second");

        this.show6 = (this.show6 === "second" ? "disA" : "second");

     } else if (this.yyy < 565) { // 놓았을 때 원래 위치로 오게 하는 것
          this.yyy = this.defaultY + e.deltaY;
          if(e.isFinal == true){
            this.yyy = this.defaultY;
            this.triggered = false;
          }
     }
          
  }
}
