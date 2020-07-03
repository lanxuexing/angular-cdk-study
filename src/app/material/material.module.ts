import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [
    MaterialComponent,
    IconComponent
  ],
  imports: [
    CoreModule,
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
