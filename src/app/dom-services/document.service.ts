import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

function getDocument(): Document {
  return document;
}

@Injectable()
export class DocumentService {
  private get nativeDocument(): Document {
    return getDocument();
  }

  private get body(): HTMLElement {
    return this.nativeDocument.body;
  }

  private get documentElement(): HTMLElement {
    return this.nativeDocument.documentElement;
  }

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object
  ) { }

  public getScrollTop(): number {
    if (isPlatformServer(this._platformId)) { return 0; }

    return this.getWindowPageYOffset() ||
      this.documentElement.scrollTop ||
      this.body.scrollTop;
  }

  public getScrollLeft(): number {
    if (isPlatformServer(this._platformId)) { return 0; }

    return this.getWindowPageXOffset() ||
      this.documentElement.scrollLeft ||
      this.body.scrollLeft;
  }

  public getClientTop(): number {
    if (isPlatformServer(this._platformId)) { return 0; }

    return this.documentElement.clientTop ||
      this.body.clientTop ||
      0;
  }

  public getClientLeft(): number {
    if (isPlatformServer(this._platformId)) { return 0; }

    return this.documentElement.clientLeft ||
      this.body.clientLeft ||
      0;
  }

  private getWindowPageYOffset(): number | undefined {
    return this.nativeDocument.defaultView &&
      this.nativeDocument.defaultView.pageYOffset ||
      undefined;
  }

  private getWindowPageXOffset(): number | undefined {
    return this.nativeDocument.defaultView &&
      this.nativeDocument.defaultView.pageXOffset ||
      undefined;
  }
}
