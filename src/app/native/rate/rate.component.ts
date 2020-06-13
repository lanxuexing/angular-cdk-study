import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


/**
 * 例子：
 * 1. <app-rate [(ngModel)]="value" [count]="5"></app-rate>
 * 2. <app-rate [(ngModel)]="value" [count]="5" [character]="'好'" [color]="'#ffa500'"></app-rate>
 */
@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RateComponent),
      multi: true
    }
  ]
})
export class RateComponent implements OnInit, ControlValueAccessor {
  @Input() read = false; // 是否为只读模式
  @Input() count = 5; // 总等级数
  @Input() color = ''; // 星星颜色
  @Input() icon = ''; // 评分图标的样式
  @Input() character = ''; // 评分图标的样式，icon 与 character 只能设置其中一个
  @Input() type: 'success' | 'warning' | 'error'; // 当前评分的类型，不同类型对应不同颜色


  totalLevelArray = [];
  chooseValue: number;
  width = '';
  onChange: (value: number) => void = () => null;
  onTouched: () => void = () => null;


  ngOnInit(): void {
    for (let i = 0; i < this.count; i++) {
      this.totalLevelArray.push({ width: '0' });
    }
  }


  // 只读模式配置
  setStaticRating() {
    const halfStar = this.chooseValue % 1;
    const intCurrentLevel = Math.floor(this.chooseValue);
    this.setChange(0, intCurrentLevel + 1, '100%');
    if (halfStar > 0) {
      this.totalLevelArray[intCurrentLevel + 1].width = halfStar * 100 + '%';
      this.setChange(intCurrentLevel + 2, this.count, '0');
    } else {
      this.setChange(intCurrentLevel + 1, this.count, '0');
    }
  }


  // 动态模式配置
  setDynamicRating() {
    this.setChange(0, this.chooseValue + 1, '100%');
    this.setChange(this.chooseValue + 1, this.count, '0');
  }


  hoverToggle(event, index?: number, reset: boolean = false) {
    if (this.read) {
      return;
    }
    if (reset) {
      if (this.chooseValue >= 0) {
        this.setChange(0, this.chooseValue + 1, '100%');
        this.setChange(this.chooseValue + 1, this.count, '0');
      } else {
        this.setChange(0, this.count, '0');
      }
    } else {
      this.setChange(0, index + 1, '100%');
      this.setChange(index + 1, this.count, '0');
    }
  }


  // 根据mouseMove，mouseLeave,select等操作，改变颜色与是否选中
  setChange(start, end, width) {
    for (let i = start; i < end; i++) {
      this.totalLevelArray[i].width = width;
    }
  }


  selectValue(index) {
    if (this.read) {
      return;
    }
    this.setChange(0, index + 1, '100%');
    this.setChange(index + 1, this.count, '0');
    this.chooseValue = index;
    this.onChange(index + 1);
    this.onTouched();
  }


  registerOnChange(fn: (_: number) => void): void {
    this.onChange = fn;
  }


  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }


  writeValue(value: number | null): void {
    this.chooseValue = value - 1;
    if (this.read) {
      this.setStaticRating();
    } else {
      this.setDynamicRating();
    }
  }


}
