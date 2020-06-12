import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Inject, Injectable, Injector, TemplateRef, forwardRef } from '@angular/core';
import { ModalComponent } from './modal.component';
import { Content, ModalInjector, MODAL_CONTAINER_DATA } from './modal.conf';


@Injectable({
    providedIn: 'root'
})
export class ModalService {
    private componentRef: ComponentRef<any>;

    constructor(
        private resolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef,
        @Inject(DOCUMENT) private document: Document
    ) {}


    open<T>(content: Content<T>, data?: any) {
        // 通过工厂解析器实例化出组件工厂
        const factory = this.resolver.resolveComponentFactory(ModalComponent);
        // 根据输入类型得到可投影节点
        const projectableNodes = this.resolveProjectableNodes(content);
        // 创建自定义注入器
        const injector = this.resolveInjector({data});
        // 通过组件工厂创建组件
        const componentRef = factory.create(injector, projectableNodes);
        // 保存组件引用
        this.componentRef = componentRef;
        // 注册Modal backdrop回调
        (this.componentRef.instance as ModalComponent).dissmiss.subscribe(() => this.close());
        componentRef.hostView.detectChanges();
        const { nativeElement } = componentRef.location;
        this.document.body.appendChild(nativeElement);
    }


    close() {
        this.appRef.detachView(this.componentRef.hostView);
    }


    // 创建投影节点
    private resolveProjectableNodes<T>(content: Content<T>) {
        // 如果是string，则创建文本节点
        if (typeof content === 'string') {
            const element = this.document.createTextNode(content);
            return [[element]];
        }

        // 如果是template，则创建嵌入式视图
        if (content instanceof TemplateRef) {
            const viewRef = content.createEmbeddedView(null);
            return [viewRef.rootNodes];
        }

        const factory = this.resolver.resolveComponentFactory(content as any);
        const componentRef = factory.create(this.injector);
        return [[componentRef.location.nativeElement], [this.document.createTextNode('Second ng-content')]];
    }


    // 创建自定义注入器
    private resolveInjector(dataToPass): ModalInjector {
        const injectorTokens = new WeakMap();
        injectorTokens.set(MODAL_CONTAINER_DATA, dataToPass);
        return new ModalInjector(this.injector, injectorTokens);
    }


}
