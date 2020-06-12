import { Injector, InjectionToken, TemplateRef, Type } from '@angular/core';

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
