import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CdkRoutingModule } from './cdk-routing.module';
import { CdkComponent } from './cdk.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { FocusKeyManagerComponent, ListItemComponent } from './focus-key-manager/focus-key-manager.component';
import { FocusMonitorComponent } from './focus-monitor/focus-monitor.component';



@NgModule({
  declarations: [
    CdkComponent,
    FocusTrapComponent,
    FocusKeyManagerComponent,
    ListItemComponent,
    FocusMonitorComponent
  ],
  imports: [
    CoreModule,
    CdkRoutingModule
  ]
})
export class CdkModule { }
