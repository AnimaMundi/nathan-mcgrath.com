import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { WindowService } from './window.service';
import { IElementPosition } from './element-position.interface';

@Injectable()
export class ScrollService {
  public scroll$: Observable<void>;

  private _scrollSubject: Subject<void>;

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _windowService: WindowService
  ) {
    this._scrollSubject = new Subject();
    this.scroll$ = this._scrollSubject.asObservable();
  }

  public smoothScrollToPosition(position: IElementPosition): void {
    if (isPlatformServer(this._platformId)) { return; }

    this._windowService.scrollTo({
      behavior: 'smooth',
      ...position
    });
  }

  public emitScrollEvent(): void {
    this._scrollSubject.next();
  }
}
