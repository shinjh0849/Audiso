import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T8Page } from "../t8/t8";
import { HomePage } from "../home/home";
/**
 * Generated class for the T9Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-t9',
  templateUrl: 't9.html',
})
export class T9Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T9Page');
  }
  onPrevious(){
    this.navCtrl.pop();
  }

  onDoubleTap(e) {
    console.log("singleTap from DoubleTapDirective")
    this.navCtrl.push(HomePage, {}, { animate: false }); // 다시 들으시려면 탭 두번을 (지금은 처음페이지로 이동)
  }

  onShortPress(e) {
    console.log("shortPress from ShortPressDirective")
    //this.navCtrl.push(T10Page, {}, { animate: false });
  }
}
