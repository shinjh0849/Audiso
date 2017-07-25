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
import { T4ToRightDirective } from '../directives/t4-to-right/t4-to-right';
import { TestPage } from "../pages/test/test";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationPage } from "../pages/animation/animation";

import { NativeAudio } from '@ionic-native/native-audio';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRcodePage } from '../pages/q-rcode/q-rcode';



@NgModule({
  declarations: [
    MyApp,
    QRcodePage,
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
    TestPage, 
    AnimationPage,

    T4ToRightDirective,
    ScreenPanDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QRcodePage,
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
    TestPage,
    AnimationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TapnDoubleTapDirective,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    NativeAudio
  ]
})
export class AppModule { }
