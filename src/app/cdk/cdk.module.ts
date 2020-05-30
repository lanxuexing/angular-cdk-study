import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkRoutingModule } from './cdk-routing.module';
import { CdkComponent } from './cdk.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [CdkComponent],
  imports: [
    CommonModule,
    CdkRoutingModule,
    CoreModule
  ]
})
export class CdkModule { }
