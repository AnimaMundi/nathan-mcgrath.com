import { NgModule } from '@angular/core';

import { DocumentService } from './document.service';
import { ElementService } from './element.service';
import { ScrollService } from './scroll.service';
import { WindowService } from './window.service';

@NgModule({
  providers: [
    DocumentService,
    ElementService,
    ScrollService,
    WindowService
  ]
})
export class DomServicesModule { }
