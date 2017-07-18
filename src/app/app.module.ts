import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Tut13Page } from '../pages/tut13/tut13';
import { Tut18Page } from '../pages/tut18/tut18';
import { T5Page } from "../pages/t5/t5";
import { T8Page } from "../pages/t8/t8";
import { T9Page } from "../pages/t9/t9";

import { DoubleTapDirective } from '../directives/double-tap/double-tap';
import { LongPressDirective } from '../directives/long-press/long-press';
import { TapnDoubleTapDirective } from '../directives/tapn-double-tap/tapn-double-tap';
import { ShortPressDirective } from '../directives/short-press/short-press';
import { T5UpDownPanDirective } from '../directives/t5-up-down-pan/t5-up-down-pan';
import { T9LeftPanDirective } from '../directives/t9-left-pan/t9-left-pan';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tut13Page,
    Tut18Page,
    T5Page,
    T8Page,
    T9Page,
    
    DoubleTapDirective,
    LongPressDirective,
    TapnDoubleTapDirective,
    ShortPressDirective,
    T5UpDownPanDirective,
    T9LeftPanDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Tut13Page,
    Tut18Page,
    T5Page,
    T8Page,
    T9Page
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TapnDoubleTapDirective,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
