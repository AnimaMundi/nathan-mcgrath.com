import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'nmg-timeline-event',
  templateUrl: './timeline-event.component.html',
  styleUrls: ['./timeline-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineEventComponent {
  @Input() public set side(side: string) {
    this.sideClass = `nmg-timeline-event--${side}`;
    this.innerSideClass = `nmg-timeline-event__inner--${side}`;
    this.detailsSideClass = `nmg-timeline-event-details--${side}`;
    this.detailsInnerSideClass = `nmg-timeline-event-details__inner--${side}`;
    this.wrapperSideClass = `nmg-timeline-event-wrapper--${side}`;

    this._side = side;
  }

  public _side: string = 'left';

  public sideClass: string = 'nmg-timeline-event--left';
  public innerSideClass: string = 'nmg-timeline-event__inner--left';
  public detailsSideClass: string = 'nmg-timeline-event-details--left';
  public detailsInnerSideClass: string = 'nmg-timeline-event-details__inner--left';
  public wrapperSideClass: string = 'nmg-timeline-event-wrapper--left';
}
