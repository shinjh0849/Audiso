import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { Tut18Page } from '../tut18/tut18';
import { TestPage } from '../test/test';

//import { LongPressDirective } from '../../directives/long-press/long-press';

@Component({
  selector: 'page-tut13',
  templateUrl: 'tut13.html',
})
export class Tut13Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut13Page');
  }

  onLongPress(e){
    this.navCtrl.push( TestPage, {}, {animate: false} );
  }
}
