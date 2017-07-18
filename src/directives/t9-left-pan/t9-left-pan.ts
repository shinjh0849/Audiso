import { Directive, Input, Output, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { DomController } from 'ionic-angular';
@Directive({
  selector: '[t9-left-pan]' 
  
})
export class T9LeftPanDirective{

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
    console.log(ev.center.x);
    let newLeft = ev.changedPointers[0].x;
    let newTop = ev.changedPointers[0].y;


    this.domCtrl.write(() => {
     this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
     this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
    }); 

    if(ev.center.x <= "75.185" && !this.triggered){
      this.triggered = true;
      this.overdrag.emit(true);
    }
 // 다시 돌아오게 하는 거 작성해야한다.
  }

 
}
