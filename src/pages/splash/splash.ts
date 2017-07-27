import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
  animations: [
  trigger('upDown', [
    state('up',   style({
      left: '0px', top: '-3000px'
    })),
    state('down', style({
      transform: 'translateY(0) scale(0)'
    })),
    transition('up => down', animate('100ms ease-out'))
  ])
]
})
export class SplashPage {
 
  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {
 
  }
 
  ionViewDidEnter() {
 
    this.splashScreen.hide();
 
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);
 
  }
 

  
}