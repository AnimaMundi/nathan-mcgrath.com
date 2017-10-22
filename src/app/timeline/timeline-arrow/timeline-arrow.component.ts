import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'nmg-timeline-arrow',
  templateUrl: './timeline-arrow.component.html',
  styleUrls: ['./timeline-arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineArrowComponent {
  @Input()
  public set side(side: string) {
    this.arrowSideClass = `nmg-timeline-arrow--${side}`;
  }

  public arrowSideClass: string = 'nmg-timeline-arrow--left';
}
