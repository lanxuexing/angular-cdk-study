import { FocusOrigin } from '@angular/cdk/a11y';
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
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  /**
   * CDK a11y FocusMonitor指令，可以监控某个元素。cdkMonitorElementFocus 相当于在 checkChildren 为 false 的宿主元素上调用 monitor。
   * cdkMonitorSubtreeFocus 相当于在 checkChildren 为 true 的宿主元素上调用 monitor。这两个指令都有一个 @Output() cdkFocusChange，
   * 每当它发生变化时都会通过该事件发出新的 FocusOrigin。
   */
  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  // 在NgZone外部发出cdkFocusChange事件的解决方法。
  markForCheck() {
    this.ngZone.run(() => this.cdr.markForCheck());
  }

}
