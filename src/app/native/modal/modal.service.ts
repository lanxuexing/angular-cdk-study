import { Injectable, ComponentFactoryResolver, Injector, Inject, TemplateRef, Type, InjectionToken, ApplicationRef, ComponentRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalComponent } from './modal.component';

// 自定义投影节点类型
export type Content<T> = string | TemplateRef<T> | Type<T>;


// 自定义注入器
export const MODAL_CONTAINER_DATA = new InjectionToken<{}>('MODAL_CONTAINER_DATA');


// 提供定制时使用的定制注入器，向组件注入令牌。
export class ModalInjector implements Injector {
    constructor(
        private parentInjector: Injector,
        private customTokens: WeakMap<any, any>
    ) { }

    // 使用弱引用键/值对Map集合提供get方法获取令牌
    get(token: any, notFoundValue?: any): any {
        const value = this.customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this.parentInjector.get<any>(token, notFoundValue);
    }
}


// Modal配置项
export interface ModalConfig {
    backdropDismiss: boolean; // 是否在蒙版点击的时候关闭Modal
}


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
