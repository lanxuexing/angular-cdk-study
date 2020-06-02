import { Component } from '@angular/core';

@Component({
    selector: 'app-base',
    template: `
        <ng-content></ng-content>
        <app-back></app-back>
    `
})
export class BaseComponent { }
