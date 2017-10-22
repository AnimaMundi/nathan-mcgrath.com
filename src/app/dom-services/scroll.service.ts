import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { WindowService } from './window.service';
import { IElementPosition } from './element-position.interface';

@Injectable()
export class ScrollService {

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _windowService: WindowService
  ) { }

  public smoothScrollToPosition(position: IElementPosition): void {
    if (isPlatformServer(this._platformId)) { return; }

    this._windowService.scrollTo({
      behavior: 'smooth',
      ...position
    });
  }
}
