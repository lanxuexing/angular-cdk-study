import { Component, Injector, InjectionToken, Inject, ViewChild } from '@angular/core';
import { Portal, ComponentPortal, PortalInjector, PortalOutlet } from '@angular/cdk/portal';

// 创建一个依赖注入令牌
export const PROTAL_INJECT_DATA = new InjectionToken<any>('protal_inject_data');


@Component({
  selector: 'app-component-portal',
  templateUrl: './component-portal.component.html',
  styleUrls: ['./component-portal.component.scss']
})
export class ComponentPortalComponent {
  currentPortal: Portal<any>;
  name = 'componentAlias'; // 临时别名，主要用于传递参数测试
  @ViewChild('portalOutlet') portalOutlet: PortalOutlet;

  constructor(
    private injector: Injector
  ) { }

  // 切换Component Portal
  switchComponentPortal(index: number): void {
    if (index === 1) { // 静态插入PortaloOtlet
      if (this.currentPortal && this.currentPortal.isAttached) {
        this.currentPortal.detach();
        return;
      }
      const portalInjector = this.createInjector();
      const dynamicPortal = new ComponentPortal(
        ComponentPortalTestComponent,
        null,
        portalInjector
      );
      this.currentPortal = dynamicPortal;
    } else if (index === 2) { // 动态插入PortaloOtlet
      const portalInjector = this.createInjector();
      const dynamicPortal = new ComponentPortal(
        ComponentPortalTestComponent,
        null,
        portalInjector
      );
      this.portalOutlet.detach();
      this.portalOutlet.attach(dynamicPortal);
    }
  }

  // 创建依赖注入器
  private createInjector(): Injector {
    const customTokens = new WeakMap();
    customTokens.set(PROTAL_INJECT_DATA, this.name);
    return new PortalInjector(this.injector, customTokens);
  }

}


// 测试组件1
@Component({
  selector: 'app-component-portal-test',
  template: `
    <p>我是Component Portal测试组件一呀～😝</p>
    <p>接收到参数: {{ nameInTemplate }}</p>
  `,
  styles: [``]
})
export class ComponentPortalTestComponent {
  nameInTemplate: string; // 传递的上下文参数

  constructor(
    @Inject(PROTAL_INJECT_DATA) private data: any // 通过依赖注入令牌获取传递过来的参数
  ) {
    this.nameInTemplate = this.data;
  }

}
