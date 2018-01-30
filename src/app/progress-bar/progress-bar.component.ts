import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'nmg-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('progressBarState', [
      state(
        'inView',
        style({
          width: '{{ width }}'
        }),
        { params: { width: '100%' } }
      ),
      state(
        'outOfView',
        style({
          width: 0
        })
      ),
      transition('* => *', animate('768ms ease-out'))
    ])
  ]
})
export class ProgressBarComponent {
  public state: string;

  @Input()
  private value: number;

  public progress(): string {
    return `${this.clamp(this.value)}%`;
  }

  public onEnterView(): void {
    this.state = 'inView';
  }

  public onExitView(): void {
    this.state = 'outOfView';
  }

  private clamp(value: number): number {
    return Math.max(0, Math.min(100, value));
  }
}
