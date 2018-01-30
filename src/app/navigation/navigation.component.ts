import {
  Component, ChangeDetectionStrategy,
  ViewChildren, QueryList,
  ChangeDetectorRef
} from '@angular/core';

import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
import { DocumentService } from '../dom-services/document.service';
import { ScrollService } from '../dom-services/scroll.service';

const SCROLL_Y_DISPLACEMENT: number = 500;
const LINK_HEIGHT: number = 100;

@Component({
  selector: 'nmg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

  @ViewChildren(NavigationLinkComponent)
  private set linkElements(linkElements: QueryList<NavigationLinkComponent>) {
    this._linkElements = linkElements;

    if (linkElements.length) {
      this.init();
    }

    this._changeDetectorRef.detectChanges();
  }

  private activeIndex: number = 0;
  private numLinks: number = 0;
  private _linkElements: QueryList<NavigationLinkComponent>;
  private sortedLinkElements: Array<NavigationLinkComponent>;

  constructor(
    private _documentService: DocumentService,
    private _scrollService: ScrollService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this._scrollService.scroll$.subscribe(this.onWindowScroll.bind(this));
  }

  public onWindowScroll(): void {
    this.setActiveLink();
  }

  public getIndicatorBarHeight(): string {
    return `${LINK_HEIGHT * this.numLinks}px`;
  }

  public getIndicatorHeight(): string {
    return `${LINK_HEIGHT}px`;
  }

  public getIndicatorTop(): string {
    return `${LINK_HEIGHT * this.activeIndex}px`;
  }

  private init(): void {
    this.sortedLinkElements = this._linkElements.toArray()
      .sort((a: NavigationLinkComponent, b: NavigationLinkComponent) =>
        a.getTargetPosition().top - b.getTargetPosition().top
      );
    this.numLinks = this.sortedLinkElements.length;

    this.setActiveLink();
  }

  private setLinkElementsInactive(): void {
    this._linkElements.forEach((navigationLink: NavigationLinkComponent) => {
      navigationLink.setIsActive(false);
    });
  }

  private setActiveLink(): void {
    this.activeIndex = 0;

    for (let i: number = 0, len: number = this.sortedLinkElements.length; i < len; i++) {

      const scrollPos: number = this._documentService.getScrollTop();
      const curPos: number = this.sortedLinkElements[i].getTargetPosition().top;

      if (i === len - 1) {
        if (scrollPos >= (curPos - SCROLL_Y_DISPLACEMENT)) {
          this.activeIndex = i;
          break;
        }
      }

      const nextPos: number = this.sortedLinkElements[i + 1].getTargetPosition().top;

      if (
        scrollPos >= (curPos - SCROLL_Y_DISPLACEMENT) &&
        scrollPos < (nextPos - SCROLL_Y_DISPLACEMENT)
      ) {
        this.activeIndex = i;
        break;
      }
    }

    this.setLinkElementsInactive();
    this.sortedLinkElements[this.activeIndex].setIsActive(true);

    this._changeDetectorRef.detectChanges();
  }
}
