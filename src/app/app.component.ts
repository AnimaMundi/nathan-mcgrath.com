import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { ScrollService } from './dom-services/scroll.service';

@Component({
  selector: 'nmg-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private _scrollService: ScrollService,
  ) { }

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    this._scrollService.emitScrollEvent();
  }
}
