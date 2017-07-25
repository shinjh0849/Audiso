import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-q-rcode',
  templateUrl: 'q-rcode.html',
})
export class QRcodePage {

  options: BarcodeScannerOptions;
  results: {};
  constructor(private barcode: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRcodePage');
  }

  async scanQRcode(){
    this.options = {
      prompt : 'Scan a barcode to see the result!'
    }
    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
  }

}
