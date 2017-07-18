import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { T5Page } from "../pages/t5/t5";
import { T6Page } from '../pages/t6/t6';
import { T7Page } from '../pages/t7/t7';
import { T8Page } from "../pages/t8/t8";
import { T9Page } from "../pages/t9/t9";
import { T12Page } from '../pages/t12/t12';

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
    T5Page,
    T6Page,
    T7Page,
    T8Page,
    T9Page,
    T12Page,
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
    T5Page,
    T6Page,
    T7Page,
    T8Page,
    T9Page,
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
