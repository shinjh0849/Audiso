
import { T4Page } from './../t4/t4';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private app: App) {
    
  }


  onClick(){
    this.navCtrl.push(T4Page);

  }

}
