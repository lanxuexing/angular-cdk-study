import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { NativeRoutingModule } from './native-routing.module';
import { NativeComponent } from './native.component';


@NgModule({
  declarations: [
    NativeComponent,
    CustomModalComponent,
  ],
  imports: [
    CoreModule,
    NativeRoutingModule
  ]
})
export class NativeModule { }
