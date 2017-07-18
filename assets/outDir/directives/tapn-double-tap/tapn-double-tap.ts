import { Directive, ElementRef } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
import { DoubleTapDirective } from '../double-tap/double-tap';
import { HomePage } from '../../pages/home/home';
import { Tut13Page } from '../../pages/tut13/tut13';

@Directive({
  selector: '[tapn-double-tap]'
})

export class TapnDoubleTapDirective {
  tapGesture: Gesture;
  
  constructor() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tut18Page');
  }

  SepTap(tapGesture){
    return {
      restrict: "A",
      link: this.linkFunc
    }
  }

  linkFunc(scope, ele, attrs){
    var isDoubleTap = false

    var tap = this.tapGesture.on("tap", onTap)
    var doubleTap = this.tapGesture.on("doubleTap", onDoubleTap)

    function onTap(){
      setTimeout(onTap, 250)
      function onTap(){
        if(isDoubleTap) return
        scope.$apply(attrs.stTap)
      }
    }

    function onDoubleTap(){
      isDoubleTap = true
      scope.$apply(attrs.stDoubleTap)
      setTimeout(function () { isDoubleTap = false }, 300)
    }

    ele.on("$destroy", function() {
      this.tapGesture.off(tap, "tap", onTap)
      this.tapGesture.off(doubleTap, "doubletap", onDoubleTap)
    })



    
    
    function homeCtrl(Scope) {
    var vm = this
    
    vm.onTap = function (inc) {
      console.log("onTap from ctrl")
      this.navCtrl.push( Tut13Page, {}, {animate: false} );
    }
    
    vm.onDoubleTap = function (inc) {
      console.log("onDouble from ctrl")
      this.navCtrl.push( HomePage, {}, {animate: false} );
    }
  }
  }
}
