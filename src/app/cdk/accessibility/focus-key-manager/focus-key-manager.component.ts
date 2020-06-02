import { FocusKeyManager, FocusableOption } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: '<ng-content></ng-content>',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    tabindex: '-1',
    '[class.disabled]': 'disabled'
  },
  styles: [
    `
      :host {
        display: block;
        padding: 10px 5px;
        border-bottom: solid 1px #ccc;
      }
      :host:focus {
        background: #ccc;
        color: #fff;
      }
      :host.disabled {
        color: #ddd;
        pointer-events: none;
      }
    `
  ]
})
export class ListItemComponent implements FocusableOption {
  @Input() disabled: boolean;

  constructor(
    private elementRef: ElementRef
  ) { }

  focus() {
    this.elementRef.nativeElement.focus();
  }

}


@Component({
  selector: 'app-focus-key-manager',
  templateUrl: './focus-key-manager.component.html',
  styleUrls: ['./focus-key-manager.component.scss']
})
export class FocusKeyManagerComponent implements AfterViewInit {
  // step1: 为要管理的条目创建一个@ViewChildren查询
  @ViewChildren(ListItemComponent) items: QueryList<ListItemComponent>;
  keyManager: FocusKeyManager<ListItemComponent>;

  constructor() { }

  ngAfterViewInit(): void {
    // step2: 初始化ListKyeManager，并传入这些选项（PS：FocusKeyManager继承自ListKyeManager）
    this.keyManager = new FocusKeyManager<ListItemComponent>(this.items).withWrap();
    this.keyManager.setFirstItemActive();
  }

  // 根据传入的键事件设置活动项目，其中参数是键盘事件，用于确定哪个元素应该处于活动状态
  handleKeyEvent(event: KeyboardEvent): void {
    // step3: 把键盘事件从被管理的组件转发到 ListKeyManager
    this.keyManager.onKeydown(event);
  }

}
