import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {
  @Input() private date: string;
  // <p>
  private paragraph;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }
  @HostListener('mouseenter') mousEnter(eventDate: Event) {
    this.paragraph.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave') mouseLeave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}
