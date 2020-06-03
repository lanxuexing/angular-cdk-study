import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CdkRoutingModule } from './cdk-routing.module';
import { CdkComponent } from './cdk.component';
import { FocusTrapComponent } from './accessibility/focus-trap/focus-trap.component';
import { FocusKeyManagerComponent, ListItemComponent } from './accessibility/focus-key-manager/focus-key-manager.component';
import { FocusMonitorComponent } from './accessibility/focus-monitor/focus-monitor.component';
import { FocusMonitorViaComponent } from './accessibility/focus-monitor-via/focus-monitor-via.component';
import { FocusMonitorDirectiveComponent } from './accessibility/focus-monitor-directive/focus-monitor-directive.component';
import { BidiComponent } from './bidirectionality/bidi/bidi.component';
import { CopyComponent } from './clipboard/clipboard/copycomponent';



@NgModule({
  declarations: [
    CdkComponent,
    FocusTrapComponent,
    FocusKeyManagerComponent,
    ListItemComponent,
    FocusMonitorComponent,
    FocusMonitorViaComponent,
    FocusMonitorDirectiveComponent,
    BidiComponent,
    CopyComponent
  ],
  imports: [
    CoreModule,
    CdkRoutingModule
  ]
})
export class CdkModule { }
