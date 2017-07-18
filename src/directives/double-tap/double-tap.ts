import { Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
declare var Hammer: any;
var isDoubleTap = false

@Directive({
  selector: '[doubleTap]'
})

export class DoubleTapDirective implements OnInit, OnDestroy {
  el: HTMLElement;
  el2: HTMLElement;
  sTapGesture: Gesture;
  dTapGesture: Gesture;
  


  @Output()
  doubleTap: EventEmitter<any> = new EventEmitter();
  singleTap: EventEmitter<any> = new EventEmitter();
    
  
  constructor(el: ElementRef, el2: ElementRef) {
    this.el = el.nativeElement;
    this.el2 = el2.nativeElement;
  }

  ngOnInit() { 
    this.dTapGesture = new Gesture(this.el2, {
      recognizers: [
        [Hammer.Tap, {taps: 2}]
      ]
    });
    this.dTapGesture.listen();
    this.dTapGesture.on('tap', e => {
      this.doubleTap.emit(e);
      console.log(Hammer.Tap);
    });
    
    
  }

  ngOnDestroy() {
    this.sTapGesture.destroy();
    this.dTapGesture.destroy();
  }

}
