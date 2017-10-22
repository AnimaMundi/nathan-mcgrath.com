import { Injectable, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { DocumentService } from './document.service';
import { IElementPosition } from './element-position.interface';

@Injectable()
export class ElementService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _documentService: DocumentService
  ) { }

  public getPosition(element: ElementRef): IElementPosition {
    if (isPlatformServer(this.platformId)) {
      return {
        top: 0,
        left: 0
      };
    }

    const htmlElement: HTMLElement = element.nativeElement;
    const clientRect: ClientRect = htmlElement.getBoundingClientRect();

    const top: number = clientRect.top + this._documentService.getScrollTop() - this._documentService.getClientTop();
    const left: number = clientRect.left + this._documentService.getScrollLeft() - this._documentService.getClientLeft();

    return {
      top: Math.round(top),
      left: Math.round(left)
    };
  }

  public getScrollRelativePosition(element: ElementRef): IElementPosition {
    if (isPlatformServer(this.platformId)) {
      return {
        top: 0,
        left: 0
      };
    }

    const htmlElement: HTMLElement = element.nativeElement;
    const clientRect: ClientRect = htmlElement.getBoundingClientRect();

    return {
      top: clientRect.top,
      left: clientRect.left
    };
  }
}
