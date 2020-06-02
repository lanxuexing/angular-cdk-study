import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-focus-monitor-directive',
  templateUrl: './focus-monitor-directive.component.html',
  styleUrls: ['./focus-monitor-directive.component.scss']
})
export class FocusMonitorDirectiveComponent {
  elementOrigin = this.formatOrigin(null);
  subtreeOrigin = this.formatOrigin(null);

  constructor(
    private focusMonitor: FocusMonitor,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  // 在NgZone外部发出cdkFocusChange事件的解决方法。
  markForCheck() {
    this.ngZone.run(() => this.cdr.markForCheck());
  }

}
