import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CdkRoutingModule } from './cdk-routing.module';
import { CdkComponent } from './cdk.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';



@NgModule({
  declarations: [
    CdkComponent,
    FocusTrapComponent
  ],
  imports: [
    CoreModule,
    CdkRoutingModule
  ]
})
export class CdkModule { }
