import { HomePage } from './../pages/home/home';
import { Component, Input } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TestPage } from "../pages/test/test";
import { AnimationPage } from "../pages/animation/animation";

import { P1Page } from "../pages/p1/p1";


import { SplashPage } from '../pages/splash/splash';
import { RecommendPage } from '../pages/recommend/recommend';

import { TutorialPage } from "../pages/tutorial/tutorial";
import { T2Page } from "../pages/t2/t2";

import { Tutorial2Page } from "../pages/tutorial2/tutorial2";

import { RecommendMaterialPage } from '../pages/recommend-material/recommend-material';
import { RecommendProductPage } from '../pages/recommend-product/recommend-product';
import { ProductColorPage } from '../pages/product-color/product-color';
import { ProductSizePage } from '../pages/product-size/product-size';
import { ProductConfirmPage } from '../pages/product-confirm/product-confirm';
import { NavigationPage } from '../pages/navigation/navigation';




@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  rootPage:any = RecommendMaterialPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {

      statusBar.styleDefault();


     // let splash = modalCtrl.create(SplashPage);
     // splash.present();

    });
  }

  
}

