
import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appColor]'
})
   
export class ColorDirective{
      @Input('appColor') color:string = 'blue'
   
    constructor(private el: ElementRef, private r: Renderer2) {
        // this.r.setStyle(this.el.nativeElement,  style: 'color', value: 'red', )
        el.nativeElement.style.color = this.color
    }
    @HostListener('mouseenter') onEvent() {
     this.el.nativeElement.style.color = this.color
    // this.el.nativeElement.style:'color' this.color )
    }

}
