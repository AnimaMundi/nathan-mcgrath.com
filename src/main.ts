import './index.scss';

import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppBrowserModule } from './app/app-browser.module';
platformBrowserDynamic().bootstrapModule(AppBrowserModule);
