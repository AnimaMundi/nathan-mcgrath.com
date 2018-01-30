import { Directive, EventEmitter, OnInit, Output, ElementRef } from '@angular/core';

import { ScrollService } from './scroll.service';
import { ElementService } from './element.service';

@Directive({
  selector: '[nmgInView]'
})
export class InViewDirective implements OnInit {
  public isInView: boolean = false;

  @Output()
  public enterView: EventEmitter<void> = new EventEmitter();

  @Output()
  public exitView: EventEmitter<void> = new EventEmitter();

  constructor(
    private _scrollService: ScrollService,
    private _elementService: ElementService,
    private _elementRef: ElementRef,
  ) { }

  public ngOnInit(): void {
    this._scrollService.scroll$.subscribe(this._onScroll.bind(this));
  }

  private _onScroll(): void {
    const isInView: boolean = this._elementService.isInView(this._elementRef);

    if (!this.isInView && isInView) {
      this.enterView.emit();
    } else if (this.isInView && !isInView) {
      this.exitView.emit();
    }

    this.isInView = isInView;
  }
}
