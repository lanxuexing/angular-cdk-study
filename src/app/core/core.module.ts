import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackComponent } from './back/back.component';

const COMPONENTS = [
    BackComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [ CommonModule ],
    exports: [...COMPONENTS],
    providers: [],
})
export class CoreModule {}
