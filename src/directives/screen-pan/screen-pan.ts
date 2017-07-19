import { Directive, Input, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';
import { DomController } from 'ionic-angular';

/**
 * Generated class for the ScreenPanDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[screen-pan]' // Attribute selector
})
export class ScreenPanDirective {

 @Input('startLeft') startLeft: any;
  @Input('startTop') startTop: any;

  @Output() overDrag: any = new EventEmitter();

  triggered: boolean = false;
  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController ) {
    
  }

  ngAfterViewInit(){
     // this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');    
      let hammer = new window['Hammer'](this.element.nativeElement);
      hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL});
      hammer.on('pan', (ev) => {
        this.handlePan(ev);
      })
  }


  handlePan(ev){
      console.log(ev);
      let newLeft = ev.deltaX;
      let newTop = ev.center.y;
      let margin = ev.center.x - this.element.nativeElement.offsetLeft;
      let final = newLeft - this.element.nativeElement.offsetLeft;

      console.log(ev.deltaX+ " deltaX");
      console.log(this.element.nativeElement.offsetLeft+" offsetLeft");
      console.log(newLeft+" newLeft");
      console.log(ev.center.x+" center.x");
     // console.log(this.element.nativeElement);
      console.log(ev.isFirst);
      console.log(ev.isFinal);
      console.log(final+" final");
     //console.log(this.renderer);
     //console.log(newLeft);
     
     
     if(this.element.nativeElement.offsetLeft <= -135 && !this.triggered){
        this.triggered = true;
        this.domCtrl.write( () => {
            this.renderer.setElementStyle(this.element.nativeElement, 'left', 0 + 'px');
        })
       this.overDrag.emit(true); 

     }else if(this.element.nativeElement.offsetLeft <= -135){
        this.domCtrl.write( () => {
            this.renderer.setElementStyle(this.element.nativeElement, 'left', 0 + 'px');
        })
        
     }else{
          this.domCtrl.write( () => {
          this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft +'px');
        })
     }
     
     if(ev.isFinal == true){
       this.domCtrl.write( () => {
          this.renderer.setElementStyle(this.element.nativeElement, 'left', 0 + 'px');
       })
       this.triggered = false;
     }
   }
}
