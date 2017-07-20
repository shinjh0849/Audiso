import { T5Page } from './../t5/t5';
import { T2Page } from './../t2/t2';



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

   
    this.navCtrl.push(T2Page);

  }

}
