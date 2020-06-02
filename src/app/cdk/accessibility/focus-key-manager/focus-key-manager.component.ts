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

  ngAfterViewInit() {
    // step2: 初始化ListKyeManager，并传入这些选项（PS：FocusKeyManager继承自ListKyeManager）
    this.keyManager = new FocusKeyManager<ListItemComponent>(this.items).withWrap();
    this.keyManager.setFirstItemActive();
  }

}
