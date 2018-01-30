import { NgModule } from '@angular/core';

import { DocumentService } from './document.service';
import { ElementService } from './element.service';
import { ScrollService } from './scroll.service';
import { WindowService } from './window.service';
import { InViewDirective } from './in-view.directive';

@NgModule({
  providers: [
    DocumentService,
    ElementService,
    ScrollService,
    WindowService
  ],
  declarations: [
    InViewDirective
  ],
  exports: [
    InViewDirective
  ]
})
export class DomServicesModule { }
