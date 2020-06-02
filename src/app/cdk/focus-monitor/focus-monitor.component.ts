import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { FocusOrigin, FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-focus-monitor',
  templateUrl: './focus-monitor.component.html',
  styleUrls: ['./focus-monitor.component.scss']
})
export class FocusMonitorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('element') element: ElementRef<HTMLElement>;
  @ViewChild('subtree') subtree: ElementRef<HTMLElement>;
  elementOrigin = this.formatOrigin(null);
  subtreeOrigin = this.formatOrigin(null);

  constructor(
    // 注入FocusMonitor服务
    private focusMonitor: FocusMonitor,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  /**
   * 要监听某个元素的焦点变化，可以用 monitor 方法传入要监控的元素和一个可选的逻辑标志 checkChildren。
   * 给 checkChildren 传入 true 会告诉 FocusMonitor ：如果该元素的任何各级子元素有焦点，
   * 就认为该元素有焦点。如果没有指定，该选项默认为 false 。monitor 方法会返回一个可观察对象，
   * 当焦点状态改变时，该对象会发送一个 FocusOrigin。 FocusOrigin 是下列值之一：
   *
   * 1. 'mouse'表示该元素是通过鼠标获得焦点的
   * 2. 'keyboard'表示该元素是通过键盘获得焦点的
   * 3. 'touch'表示该元素是通过触摸屏获得焦点的
   * 4. 'program'表示该元素是通过编程方式获得焦点的
   * 5. null表示该元素失去了焦点
   *
   * 注意；可观察对象会在 Angular Zone 之外发出 FocusMonitor
   */
  ngAfterViewInit() {
    this.focusMonitor.monitor(this.element)
      .subscribe(origin => this.ngZone.run(() => {
        this.elementOrigin = this.formatOrigin(origin);
        this.cdr.markForCheck();
      }));
    this.focusMonitor.monitor(this.subtree, true)
      .subscribe(origin => this.ngZone.run(() => {
        this.subtreeOrigin = this.formatOrigin(origin);
        this.cdr.markForCheck();
      }));
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.element);
    this.focusMonitor.stopMonitoring(this.subtree);
  }

}
