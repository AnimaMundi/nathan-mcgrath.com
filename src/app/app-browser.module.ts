import { polyfill as smoothscroll } from 'smoothscroll-polyfill';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserPrebootModule } from 'preboot/browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    BrowserAnimationsModule,
    BrowserPrebootModule.replayEvents()
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
  constructor() {
    smoothscroll();
  }
}
