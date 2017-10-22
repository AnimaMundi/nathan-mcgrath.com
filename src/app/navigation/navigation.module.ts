import { NgModule } from '@angular/core';

import { NavigationService } from './navigation.service';
import { NavigationTargetDirective } from './navigation-target/navigation-target.directive';
import { NavigationComponent } from './navigation.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationTargetDirective,
    NavigationLinkComponent
  ],
  providers: [
    NavigationService
  ],
  exports: [
    NavigationComponent,
    NavigationTargetDirective,
    NavigationLinkComponent
  ]
})
export class NavigationModule { }
