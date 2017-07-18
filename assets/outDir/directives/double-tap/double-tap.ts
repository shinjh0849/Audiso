import { Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
declare var Hammer: any;


@Directive({
  selector: '[doubleTap], [singleTap]'
})

export class DoubleTapDirective implements OnInit, OnDestroy {
  el: HTMLElement;
  tapGesture: Gesture;
  

  @Output()
  doubleTap: EventEmitter<any> = new EventEmitter();
  singleTap: EventEmitter<any> = new EventEmitter();
    
  
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() { 
    var isDoubleTap = false

    this.tapGesture = new Gesture(this.el, {
      recognizers: [
        [Hammer.Tap, {taps: 1}],
        [Hammer.Tap, {taps: 2}]
      ]
    });

    
    this.tapGesture.listen();
    this.tapGesture.on('tap', e => {
      isDoubleTap = true;
      this.doubleTap.emit(e);
      setTimeout(function () { isDoubleTap = false }, 300);
    });

    this.tapGesture.listen();
    this.tapGesture.on('press', e => {
      setTimeout(250)
      if(isDoubleTap) return
      this.singleTap.emit(e);
    });
  }

  ngOnDestroy() {
    this.tapGesture.destroy();
  }

}
