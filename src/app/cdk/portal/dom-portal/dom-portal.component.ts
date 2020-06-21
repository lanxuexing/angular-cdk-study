import { Portal, CdkPortal, DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, Inject, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dom-portal',
  templateUrl: './dom-portal.component.html',
  styleUrls: ['./dom-portal.component.scss']
})
export class DomPortalComponent {
  currentPortal: Portal<any>;
  name = 'componentAlias'; // 临时别名，主要用于传递参数测试
  domPortalOutlet: DomPortalOutlet;
  @ViewChildren(CdkPortal) templatePortalLists: QueryList<CdkPortal>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  // 挂载模版Portal到插座上
  loadTemplatePortal(): void {
    this.currentPortal = this.templatePortalLists.first;
    this.templatePortalLists.first.context = { // 传递参数
      nameInObject: `${this.name} 🍎`
    };
  }

  // 通过模版创建Portal
  createPortalFromTemplate(): void {
    const element = this.document.createElement('div');
    element.innerHTML = '<br>我在&ltapp-root&gt之外噢😝～';
    element.id = 'outletPortalEle';
    this.document.body.appendChild(element);
    this.domPortalOutlet = new DomPortalOutlet(
      element,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
    this.domPortalOutlet.attach(this.currentPortal); // 挂载Portal模版到App-Root之外的面板上
  }

}
