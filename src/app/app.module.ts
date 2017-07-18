import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { T6Page } from '../pages/t6/t6';
import { T7Page } from '../pages/t7/t7';
import { T12Page } from '../pages/t12/t12';

import { DoubleTapDirective } from '../directives/double-tap/double-tap';
import { LongPressDirective } from '../directives/long-press/long-press';
import { TapnDoubleTapDirective } from '../directives/tapn-double-tap/tapn-double-tap';
import { ShortPressDirective } from '../directives/short-press/short-press';




@NgModule({
  declarations: [
    MyApp,
    HomePage,

    T6Page,
    T7Page,

    T12Page,
    
    DoubleTapDirective,
    LongPressDirective,
    TapnDoubleTapDirective,
    ShortPressDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    T6Page,
    T7Page,

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
