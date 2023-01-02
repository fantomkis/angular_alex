
import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appColor]'
})
export class ColorDirective{
    constructor(private el: ElementRef, private r: Renderer2) {
        // this.r.setStyle(this.el.nativeElement,  style: 'color', value: 'red', )
        el.nativeElement.style.color = 'red'
    }

}
