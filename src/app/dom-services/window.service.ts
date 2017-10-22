import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

function getWindow(): Window {
  return window;
}

@Injectable()
export class WindowService {
  private get nativeWindow(): Window {
    return getWindow();
  }

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object
  ) { }

  public scrollTo(options: ScrollToOptions): void {
    if (isPlatformServer(this._platformId)) { return; }

    this.nativeWindow.scrollTo(options);
  }
}
