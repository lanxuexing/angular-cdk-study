import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackComponent } from './back/back.component';
import { BaseComponent } from './base/base.component';

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ClipboardModule } from '@angular/cdk/clipboard';

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
        FormsModule,
        ReactiveFormsModule,
        A11yModule,
        BidiModule,
        ClipboardModule,
        MatListModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [
        BaseComponent,
        BackComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        A11yModule,
        MatListModule,
        ClipboardModule,
        MatSelectModule,
        MatButtonModule
    ],
    providers: [],
})
export class CoreModule { }
