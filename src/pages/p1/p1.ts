import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-p1',
  templateUrl: 'p1.html',
  animations: [
    trigger('flyOut', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.7s')
      ])
    ]),
    trigger('flyUp', [
      state('active',   style({transform: 'translateY(100%)'})),
      state('inactive',   style({transform: 'translateY(-95%)'})),
      
      transition('void => *', [
        style({transform: 'translateY(100%)'}), 
        animate('1.5s', )
      ]),
      transition('* => void', [
        animate('1.5s' ,style({transform: 'translateY(-100%)'})), // 이건 이렇게 해야 하네.;.
        // state로 하는 거 내일 더 공부하기 잘 안되니까 ㅜ
      ])

    ])
   

  ]
 

  
})



export class P1Page {

  showText: boolean = true;
  showUp: boolean = true;
  state: string = 'active';
  

  upCircle(){
    // console.log(this.state);
    //this.state = (this.state === 'active' ? 'inactive' : 'active');
    //console.log(this.state);
    this.showUp = this.showUp ? false : true
    console.log("upCircle이 작동됨.");
  }
  
}

