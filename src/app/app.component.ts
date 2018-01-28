import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'nmg-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) { }
}
