import { Directive, ElementRef } from '@angular/core';

import * as Stickyfill from 'stickyfilljs';

@Directive({
  selector: '[ngxStickyfill]'
})
export class NgxStickyfillDirective {

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.cssText = `
      position: -webkit-sticky;
      position: -moz-sticky;
      position: -o-sticky;
      position: -ms-sticky;
      position: sticky;
    ` + this.elementRef.nativeElement.style.cssText;
    Stickyfill.addOne(this.elementRef.nativeElement);
  }
}
