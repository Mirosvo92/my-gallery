import {Directive, ElementRef, Renderer2, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {PositionEnum} from '../enums/position.enum';

@Directive({
  selector: '[appTooltipPosition]'
})
export class TooltipPositionDirective implements OnInit, OnChanges {

  @Input() position: {[key in PositionEnum]: string};

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.setPosition();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.position && changes.position.currentValue) {
      this.position = changes.position.currentValue;
      this.setPosition();
    }
  }

  private setPosition() {
    for (const key in this.position) {
      if (this.position.hasOwnProperty(key)) {
        this.elementRef.nativeElement.style[key] = this.position[key] + '%' ;
      }
    }
  }

}
