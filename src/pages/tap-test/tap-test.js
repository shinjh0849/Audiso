import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tap-test',
  templateUrl: 'tap-test.html',
})

export class TapTesPage {

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad TapTestPage');


    

    
  }



  


}

(function (angular) {
  
  angular
    .module("Tapo", ["ionic"])
    .directive("sepTap", SepTap)
    .controller("homeCtrl", homeCtrl)
  
  SepTap.$inject = ["$ionicGesture"]
  function SepTap(IonicGesture) {
      return {
         restrict: "A",
         link: linkFunc
      }

      function linkFunc(scope, ele, attrs) {
         var isDoubleTap = false

         var tap = IonicGesture.on("tap", onTap, ele)
         var doubleTap = IonicGesture.on("doubletap", onDoubleTap, ele)

         function onTap() {
            setTimeout(onTap, 250)
            function onTap() {
               if (isDoubleTap) return
               scope.$apply(attrs.stTap)
            }
         }

         function onDoubleTap() {
            isDoubleTap = true
            scope.$apply(attrs.stDoubleTap)
            // onTap is called twice almost immediadetly with a delay
            // of 250ms, so using a delay of 300ms (50ms more) to 
            // reset isDoubleTap to false.
            setTimeout(function () { isDoubleTap = false }, 300)
         }
         
         ele.on("$destroy", function () {
            IonicGesture.off(tap, "tap", onTap)
            IonicGesture.off(doubleTap, "doubletap", onDoubleTap)
         })
      }    
   }
  
  homeCtrl.$inject = ["$scope"]
  function homeCtrl(Scope) {
    var vm = this
    vm.tapCount = 0
    vm.doubleTapCount = 0
    
    vm.onTap = function (inc) {
      console.log("onTap from ctrl")
      vm.tapCount += parseFloat(inc)
    }
    
    vm.onDoubleTap = function (inc) {
      console.log("onDouble from ctrl")
      vm.doubleTapCount += parseFloat(inc)
    }
  }
  
})(angular)