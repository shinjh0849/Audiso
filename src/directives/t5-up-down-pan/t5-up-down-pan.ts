import { Directive, Input, Output, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { DomController } from 'ionic-angular';
@Directive({
  selector: '[t5-up-down-pan]'

})
export class T5UpDownPanDirective {

  @Input('startLeft') startLeft: any;
  @Input('startTop') startTop: any;

  
  @Output() overDrag: any = new EventEmitter();

  @Output() dighdigh: any = new EventEmitter();
  triggered: boolean = false;



  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {

  }

  ngAfterViewInit() {

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    })
  }

  handlePan(ev) {



   /* if (newTop >= 110 && !this.triggered) {
      this.triggered = true;
      this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'top', 110 + 'px');
      })
      this.overdrag.emit(true);

    } else if(newTop <= 110) {
      this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
      })
    }

    if (ev.isFinal == true) {
      this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'top', 0 + 'px');
      })
      this.triggered = false;
    } */

  }


}

