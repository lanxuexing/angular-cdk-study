import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { NativeRoutingModule } from './native-routing.module';
import { NativeComponent } from './native.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    NativeComponent,
    ModalComponent,
  ],
  imports: [
    CoreModule,
    NativeRoutingModule
  ]
})
export class NativeModule { }
