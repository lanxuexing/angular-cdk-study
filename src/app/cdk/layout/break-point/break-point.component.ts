import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-break-point',
  templateUrl: './break-point.component.html',
  styleUrls: ['./break-point.component.scss']
})
export class BreakPointComponent implements OnInit {

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    // 1. 静态判断，仅在初始化的时候进行一次判断
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    console.log('小屏幕 < 599px: ', isSmallScreen);

    // 2. 动态检测，只要breakpoints发生了改变就会发出Observer
    this.breakpointObserver.observe('(max-width: 599px)').subscribe(ret => console.log('动态Layout: ', ret));
  }

}
