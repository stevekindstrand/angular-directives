import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') speed: number = 0;

  constructor(private el: ElementRef) { } // startvärde

  @HostListener('mouseenter') onMouseEnter() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'green';
    (this.el.nativeElement as HTMLElement).style.transition = 'all ' + this.speed + 's';
  }

  @HostListener('mouseleave') onMouseLeave() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'transparent';
  }
}
