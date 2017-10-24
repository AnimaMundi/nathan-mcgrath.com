import 'reflect-metadata';

import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ServerModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerPrebootModule } from 'preboot/server';

import { AppComponent } from '../app/app.component';
import { AppModule } from '../app/app.module';

@NgModule({
  imports: [
    ServerModule,
    NoopAnimationsModule,
    ServerPrebootModule.recordEvents({ appRoot: 'nmg-app' }),
    AppModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppServerModule { }
