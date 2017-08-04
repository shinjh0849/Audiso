import { AniiPage } from './../anii/anii';
import { Component } from '@angular/core';
import { App, NavController, NavParams, Platform } from 'ionic-angular';

import { T2Page } from './../t2/t2';
import { T4Page } from './../t4/t4';
import { T5Page } from './../t5/t5';

import { QRcodePage } from '../q-rcode/q-rcode';
import { NativeAudio } from '@ionic-native/native-audio';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { IndoorAtlas } from 'cordova-plugin-indooratlas/www/IndoorAtlas';
declare var IndoorAtlas: IndoorAtlas;

/**
 * IndoorAtlas.initialize
 */

// onSuccess Callback
//
var onSuccess = function () {
  alert('IndoorAtlas was successfully initialized');
};

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
};





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 * IndoorAtlas.getCurrentPosition
 * 
 */
// onSuccess1 Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess1 = function (position) {
  alert('Latitude: ' + position.coords.latitude + '\n' +
    'Longitude: ' + position.coords.longitude + '\n' +
    'Altitude: ' + position.coords.altitude + '\n' +
    'Accuracy: ' + position.coords.accuracy + '\n' +
    'Heading: ' + position.coords.heading + '\n' +
    'floor: ' + position.coords.floor + '\n' +
    'Timestamp: ' + position.timestamp + '\n');
};
IndoorAtlas.getCurrentPosition(onSuccess1, onError);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 * IndoorAtlas.watchPostion
 */
// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
function onSuccess2(position) {
  var element = document.getElementById('geolocation');
  element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
    'Longitude: ' + position.coords.longitude + '<br />' +
    '<hr />' + element.innerHTML;
};


// Options: throw an error if no update is received every 30 seconds.
//
var watchID = IndoorAtlas.watchPosition(onSuccess2, onError, { timeout: 30000 });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onSuccess Callback
function onSuccess3() {
  console.log('Position was set successfully');
};

// Options: pass region id or coordinates.
//
IndoorAtlas.setPosition(onSuccess3, onError, { regionId: '00000001-0002-0003-0004-000000000005', coordinates: [37.784013, -122.406872] });



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Options: watch for changes in position, and use the most
// accurate position acquisition method available.
//
var watchID = IndoorAtlas.watchPosition(onSuccess, onError);

// ...later on...

IndoorAtlas.clearWatch(watchID);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onEnterRegion Callback
//   This method accepts a `Region` object, which contains
//   IARegion information
//
function onEnterRegion(region) {
  var element = document.getElementById('region');
  element.innerHTML = 'Entered region: ' + region.regionId + '<br />' +
    '<hr />' + element.innerHTML;
};

// onExitRegion Callback
//   This method accepts a `Region` object, which contains
//   IARegion information
//
function onExitRegion(region) {
  var element = document.getElementById('region');
  element.innerHTML = 'Exited region: ' + region.regionId + '<br />' +
    '<hr />' + element.innerHTML;
};


// Options: throw an error if no update is received every 30 seconds.
//
var watchID = IndoorAtlas.watchRegion(onEnterRegion, onExitRegion, onError);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Options: watch for changes in position, and use the most
// accurate position acquisition method available.
//
var watchID = IndoorAtlas.watchRegion(onEnterRegion, onExitRegion, onError);

// ...later on...

IndoorAtlas.clearRegionWatch(watchID);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var successCallback = function (floorplan) {
  window.open(floorplan.url, '_blank', 'location=yes');
};
var errorCallback = function (error) {
  alert(error.message);
};
IndoorAtlas.fetchFloorPlanWithId('FLOORPLANID', successCallback, errorCallback);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onSuccess Callback
function onSuccess4() {
  console.log('Distance filter was set');
};



IndoorAtlas.setDistanceFilter(onSuccess4, onError, { distance: 10 });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onSuccess Callback
function onSuccess5() {
  console.log('Point was converted to coordinate');
};


IndoorAtlas.pointToCoordinate({ x: 10, y: 10 }, 'FLOORPLANID', onSuccess5, onError);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onSuccess Callback
function onSuccess6() {
  console.log('Coordinate was converted to point');
};



IndoorAtlas.coordinateToPoint({ latitude: 60.17, longitude: 24.94 }, 'FLOORPLANID', onSuccess6, onError);




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onSuccess Callback
function onSuccess7(data) {
  console.log('Floor certainty is: ' + data.floorCertainty);
};


IndoorAtlas.getFloorCertainty(onSuccess7, onError);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onSuccess Callback
function onSuccess8(data) {
  console.log('TraceId is: ' + data.traceId);
};


IndoorAtlas.getTraceId(onSuccess8, onError);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  nativeAudio: NativeAudio;
  platform: Platform;

  constructor(public navCtrl: NavController, private app: App) {
    this.nativeAudio = new NativeAudio
  }


  onClick() {
    this.navCtrl.push(T2Page);
  }

  ionViewDidLoad() {
    console.log('HOME PAGE');

  }

  //이버튼을 누르면 큐알코드 작동하는 페이지로 넘어감
  QRbutton() {
    this.navCtrl.push(QRcodePage);
  }

  //이버튼을 누르면 노래가 나옴 -> 나중에 메써드 안에 있는 코드를 ionViewDidLoad에 넣으면 페이지 로딩때 노래가 나옴
  PLAY() {
    this.nativeAudio.preloadComplex('test1', 'assets/You-lose-sound-effect.mp3', 1, 1, 0).then(() => {
      this.nativeAudio.play('test1', () => console.log('test1 is done playing'));
    })
    this.nativeAudio.unload('test1');
  }

  //애니메이션 페이지 시험용
  onPress() {
    this.navCtrl.push(AniiPage);
  }

  haha() {
    IndoorAtlas.initialize(onSuccess,
      onError,
      {
        key: '694725c5-ee99-4df8-bdca-5a99acd97ced',
        secret: 'vGysPwqifKc8lNXtclLALN8BXKNLXeRrugroW3aDdGA0XYRRt1rfNlnBtSfid3KBCoVVBRtbPvI5Jb7qJg0cS4XvtSleQHm1NoP/adLNxx1Oe0DFve1hkGdiTxAh6w=='
      }
    );
  }

}
