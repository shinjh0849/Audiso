import { Directive, Input, Output, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { DomController } from 'ionic-angular';
@Directive({
  selector: '[t5-up-down-pan]' 
  
})
export class T5UpDownPanDirective {

  @Input('startLeft') startLeft: any;
  @Input('startTop') startTop: any;
  @Output() overdrag: any = new EventEmitter();
  triggered: boolean = false;
  
  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {
    
  }
  
  ngAfterViewInit(){
    this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute' );
    this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');

    let  hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer']. DIRECTION_ALL});

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    })
  }

  handlePan(ev){
    console.log(ev.center.y);
    let newLeft = ev.changedPointers[0].x;
    let newTop = ev.changedPointers[0].y;


    this.domCtrl.write(() => {
     this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
     this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
    }); 

    if(ev.center.y >= "564.693" && !this.triggered){
      this.triggered = true;
      this.overdrag.emit(true);
    }
 // 다시 돌아오게 하는 거 작성해야한다.
  }

 
}

