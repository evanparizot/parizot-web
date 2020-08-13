import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[nodeHover]'
})
export class OnNodeHoverDirective {
    // constructor(private el: ElementRef, private renderer: Renderer) {
    // }

    // @HostListener('mouseover') onMouseOver() {
    //     this.renderer.setElementClass(this.el.nativeElement, 'hover', true);
    // }

    // @HostListener('mouseleave') onMouseLeave() {
    //     this.renderer.setElementClass(this.el.nativeElement, 'hover', false);
    // }
}