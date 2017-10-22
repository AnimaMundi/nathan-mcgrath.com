import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'nmg-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
  @Input() private value: number;

  public progress(): string {
    return `${this.clamp(this.value)}%`;
  }

  private clamp(value: number): number {
    return Math.max(0, Math.min(100, value));
  }
}
