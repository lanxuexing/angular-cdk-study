import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackComponent } from './back/back.component';
import { BaseComponent } from './base/base.component';

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';

import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        BaseComponent,
        BackComponent
    ],
    imports: [
        CommonModule,
        A11yModule,
        BidiModule,
        MatListModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [
        BaseComponent,
        BackComponent,
        CommonModule,
        A11yModule,
        MatListModule,
        MatSelectModule,
        MatButtonModule
    ],
    providers: [],
})
export class CoreModule { }
