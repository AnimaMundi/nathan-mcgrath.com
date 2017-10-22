import {
  Component, ChangeDetectionStrategy,
  ViewChildren, QueryList, HostListener,
  ChangeDetectorRef
} from '@angular/core';

import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
import { DocumentService } from '../dom-services/document.service';

@Component({
  selector: 'nmg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  public activeIndex: number = 0;
  public numLinks: number = 0;
  public linkHeight: number = 100;

  @ViewChildren(NavigationLinkComponent)
  private set linkElements(linkElements: QueryList<NavigationLinkComponent>) {
    this._linkElements = linkElements;

    if (linkElements.length) {
      this.init();
    }

    this._changeDetectorRef.markForCheck();
  }

  private _linkElements: QueryList<NavigationLinkComponent>;

  private sortedLinkElements: Array<NavigationLinkComponent>;

  constructor(
    private _documentService: DocumentService,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    this.setActiveLink();
  }

  public getIndicatorBarHeight(): string {
    return `${this.linkHeight * this.numLinks}px`;
  }

  public getIndicatorHeight(): string {
    return `${this.linkHeight}px`;
  }

  public getIndicatorTop(): string {
    return `${this.linkHeight * this.activeIndex}px`;
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
    for (let i: number = 0, len: number = this.sortedLinkElements.length; i < len; i++) {
      if (i === len - 1) { continue; }

      const scrollPos: number = this._documentService.getScrollTop();
      const curPos: number = this.sortedLinkElements[i].getTargetPosition().top;
      const nextPos: number = this.sortedLinkElements[i + 1].getTargetPosition().top;

      if (
        scrollPos >= curPos &&
        scrollPos < nextPos
      ) {
        this.setLinkElementsInactive();
        this.sortedLinkElements[i].setIsActive(true);
        this.activeIndex = i;
      }
    }

    this._changeDetectorRef.markForCheck();
  }
}
