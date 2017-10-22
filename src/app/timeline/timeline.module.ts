import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineComponent } from './timeline.component';
import { TimelineEventComponent } from './timeline-event/timeline-event.component';

import { TimelineCircleComponent } from './timeline-circle/timeline-circle.component';
import { TimelineArrowComponent } from './timeline-arrow/timeline-arrow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimelineComponent,
    TimelineEventComponent,
    TimelineCircleComponent,
    TimelineArrowComponent
  ],
  exports: [
    TimelineComponent,
    TimelineEventComponent
  ]
})
export class TimelineModule { }
