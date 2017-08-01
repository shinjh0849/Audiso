import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';

@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class NfcPage {

  constructor(private nfc: NFC, private ndef: Ndef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NfcPage');
   
    let message = this.ndef.textRecord('Hello world');
    //this.nfc.share([message]).then(onS)
  }

}
