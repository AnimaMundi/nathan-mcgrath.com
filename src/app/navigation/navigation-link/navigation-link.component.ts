import {
  Component, ChangeDetectionStrategy,
  Input, ElementRef, PLATFORM_ID,
  Inject, ChangeDetectorRef
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { ElementService } from '../../dom-services/element.service';
import { ScrollService } from '../../dom-services/scroll.service';
import { IElementPosition } from '../../dom-services/element-position.interface';

import { NavigationService } from '../navigation.service';

@Component({
  selector: 'nmg-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationLinkComponent {
  @Input()
  public set id(id: string) {
    this._id = id;
    this.href = `#${id}`;
  }

  public get id(): string {
    return this._id;
  }

  public href: string = '#';
  public isActive: boolean = false;

  private _id: string = '';

  constructor(
    private _scrollService: ScrollService,
    private _elementService: ElementService,
    private _navigationService: NavigationService,
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) { }

  public getTargetScrollRelativePosition(): IElementPosition {
    return this._elementService.getScrollRelativePosition(this.getTarget());
  }

  public getTargetPosition(): IElementPosition {
    return this._elementService.getPosition(this.getTarget());
  }

  public onLinkClicked(event: Event): void {
    if (isPlatformServer(this._platformId)) { return; }

    event.preventDefault();

    this._scrollService.smoothScrollToPosition(this.getTargetPosition());
  }

  public setIsActive(isActive: boolean): void {
    this.isActive = isActive;
    this._changeDetectorRef.markForCheck();
  }

  private getTarget(): ElementRef {
    return this._navigationService.getTarget(this.id);
  }
}
