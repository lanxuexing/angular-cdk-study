import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackComponent } from './back/back.component';
import { A11yModule } from '@angular/cdk/a11y';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        BackComponent
    ],
    imports: [
        CommonModule,
        A11yModule,
        MatListModule
    ],
    exports: [
        BackComponent,
        CommonModule,
        A11yModule,
        MatListModule
    ],
    providers: [],
})
export class CoreModule { }
