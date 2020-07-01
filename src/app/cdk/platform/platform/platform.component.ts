import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, getRtlScrollAxisType } from '@angular/cdk/platform';
import { Component } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {
  supportedInputTypes = getSupportedInputTypes(); // 获取浏览器支持的输入类型
  supportsPassiveEventListeners = supportsPassiveEventListeners(); // 检测是否支持被动事件监听器
  supportsScrollBehavior = supportsScrollBehavior(); // 检测是否支持滚动行为
  supportRtlScrollAxisType = getRtlScrollAxisType(); // 获取rtl滚动轴类型，一共有三个值：0、1、2

  constructor(
    public platform: Platform
  ) { }

}
