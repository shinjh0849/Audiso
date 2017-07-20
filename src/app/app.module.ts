import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { T2Page } from './../pages/t2/t2';
import { T3Page } from './../pages/t3/t3';
import { T4Page } from '../pages/t4/t4';
import { T5Page } from "../pages/t5/t5";
import { T6Page } from '../pages/t6/t6';
import { T7Page } from '../pages/t7/t7';
import { T8Page } from "../pages/t8/t8";
import { T9Page } from "../pages/t9/t9";
import { T10Page } from './../pages/t10/t10';
import { T11Page } from '../pages/t11/t11';
import { T12Page } from '../pages/t12/t12';

import { ScreenPanDirective } from './../directives/screen-pan/screen-pan';
import { DoubleTapDirective } from '../directives/double-tap/double-tap';
import { LongPressDirective } from '../directives/long-press/long-press';
import { TapnDoubleTapDirective } from '../directives/tapn-double-tap/tapn-double-tap';
import { ShortPressDirective } from '../directives/short-press/short-press';
import { T5UpDownPanDirective } from '../directives/t5-up-down-pan/t5-up-down-pan';
<<<<<<< HEAD
import { T9LeftPanDirective } from '../directives/t9-left-pan/t9-left-pan';
import { T4ToRightDirective } from '../directives/t4-to-right/t4-to-right';
=======


>>>>>>> JihoMin




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    T2Page,
    T3Page,
    T4Page,
    T5Page,
    T6Page,
    T7Page,
    T8Page,
    T9Page,
    T10Page,
    T11Page,
    T12Page,
    DoubleTapDirective,
    LongPressDirective,
    TapnDoubleTapDirective,
    ShortPressDirective,
    T5UpDownPanDirective,
<<<<<<< HEAD
    T9LeftPanDirective,
    ScreenPanDirective,
    T4ToRightDirective
=======
    ScreenPanDirective
>>>>>>> JihoMin
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    T2Page,
    T3Page,
    T4Page,
    T5Page,
    T6Page,
    T7Page,
    T8Page,
    T9Page,
    T10Page,
    T11Page,
    T12Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TapnDoubleTapDirective,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
