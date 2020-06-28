import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackComponent } from './back/back.component';
import { BaseComponent } from './base/base.component';
// CDK
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PortalModule } from '@angular/cdk/portal';
// Material
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        BaseComponent,
        BackComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // CDK
        A11yModule,
        BidiModule,
        ClipboardModule,
        PortalModule,
        // Material
        MatListModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // 组件
        BaseComponent,
        BackComponent,
        // CDK
        A11yModule,
        MatListModule,
        ClipboardModule,
        PortalModule,
        // Material
        MatSelectModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [],
})
export class CoreModule { }
