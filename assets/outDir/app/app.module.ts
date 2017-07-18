import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Tut13Page } from '../pages/tut13/tut13';
import { Tut18Page } from '../pages/tut18/tut18';
import { TestPage } from '../pages/test/test';

import { DoubleTapDirective } from '../directives/double-tap/double-tap';
import { LongPressDirective } from '../directives/long-press/long-press';
import { TapnDoubleTapDirective } from '../directives/tapn-double-tap/tapn-double-tap';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tut13Page,
    Tut18Page,
    TestPage,
    DoubleTapDirective,
    LongPressDirective,
    TapnDoubleTapDirective
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
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TapnDoubleTapDirective,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
