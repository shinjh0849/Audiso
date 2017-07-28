import { HomePage } from './../pages/home/home';
import { Component, Input } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TestPage } from "../pages/test/test";
import { AnimationPage } from "../pages/animation/animation";

import { P1Page } from "../pages/p1/p1";


import { SplashPage } from '../pages/splash/splash';



@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {

      statusBar.styleDefault();

      let splash = modalCtrl.create(SplashPage);
      splash.present();
      
    });
  }

  
}

