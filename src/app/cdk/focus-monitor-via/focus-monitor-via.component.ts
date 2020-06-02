import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-focus-monitor-via',
  templateUrl: './focus-monitor-via.component.html',
  styleUrls: ['./focus-monitor-via.component.scss']
})
export class FocusMonitorViaComponent implements AfterViewInit, OnDestroy {
  @ViewChild('monitored') monitoredEl: ElementRef<HTMLElement>;
  origin = this.formatOrigin(null);

  constructor(
    public focusMonitor: FocusMonitor,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  /**
   * 当使用 FocusMonitor 的 focusVia 方法来通过编程的方式设置焦点时，可能会伪造一个 FocusMonitor。
   * 使用该方法时要传入一个希望获得焦点的元素和 FocusOrigin。如果 FocusMonitor 当前正在监视要获得焦点的元素，
   * 它就会报告传入的这个 FocusOrigin。如果当前没有监视该元素，它就会像正常情况下一样获得焦点。
   *
   * 注意；可观察对象会在 Angular Zone 之外发出 FocusMonitor
   */
  ngAfterViewInit(): void {
    this.focusMonitor.monitor(this.monitoredEl)
      .subscribe(origin => this.ngZone.run(() => {
        this.origin = this.formatOrigin(origin);
        this.cdr.markForCheck();
      }));
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.monitoredEl);
  }

}
