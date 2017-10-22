import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'nmg-timeline-circle',
  templateUrl: './timeline-circle.component.html',
  styleUrls: ['./timeline-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineCircleComponent {
  @Input()
  public set side(side: string) {
    this.circleSideClass = `nmg-timeline-circle--${side}`;
  }

  public circleSideClass: string = 'nmg-timeline-circle--left';
}
