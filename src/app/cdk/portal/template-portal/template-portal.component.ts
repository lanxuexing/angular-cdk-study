import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Portal, CdkPortal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-template-portal',
  templateUrl: './template-portal.component.html',
  styleUrls: ['./template-portal.component.scss']
})
export class TemplatePortalComponent implements AfterViewInit {
  currentPortal: Portal<any>;
  name = 'templateAlias'; // 临时别名，主要用于传递参数测试
  @ViewChildren(CdkPortal) templatePortalLists: QueryList<CdkPortal>;
  @ViewChild('template') template: TemplateRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngAfterViewInit(): void {
    console.log('批量得到cdkPortal: ', this.templatePortalLists);
  }

  // 切换TemplatePortal
  switchTemplatePortal(index: number): void {
    if (index === 1) {
      this.currentPortal = this.templatePortalLists.first; // 挂载Portal
      this.templatePortalLists.first.context = { // 传递参数
        nameInObject: `${this.name} 🍎`
      };
    } else if (index === 2) {
      this.currentPortal = this.templatePortalLists.last;
      this.templatePortalLists.last.context = { // 传递参数
        nameInObject: `${this.name} 🍐`
      };
    } else if (index === 3) {
      this.currentPortal = new TemplatePortal(this.template, this.viewContainerRef, {
        nameInObject: `${this.name} 🍉`
      });
    }
  }

}
