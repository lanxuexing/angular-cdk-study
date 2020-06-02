import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CdkRoutingModule } from './cdk-routing.module';
import { CdkComponent } from './cdk.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { FocusKeyManagerComponent, ListItemComponent } from './focus-key-manager/focus-key-manager.component';
import { FocusMonitorComponent } from './focus-monitor/focus-monitor.component';
import { FocusMonitorViaComponent } from './focus-monitor-via/focus-monitor-via.component';
import { FocusMonitorDirectiveComponent } from './focus-monitor-directive/focus-monitor-directive.component';



@NgModule({
  declarations: [
    CdkComponent,
    FocusTrapComponent,
    FocusKeyManagerComponent,
    ListItemComponent,
    FocusMonitorComponent,
    FocusMonitorViaComponent,
    FocusMonitorDirectiveComponent
  ],
  imports: [
    CoreModule,
    CdkRoutingModule
  ]
})
export class CdkModule { }
