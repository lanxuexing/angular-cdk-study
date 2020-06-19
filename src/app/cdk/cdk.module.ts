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
import { TestComponent } from './bidirectionality/test/test.component';
import { BreakPointComponent } from './layout/break-point/break-point.component';
import { TemplatePortalComponent } from './portal/template-portal/template-portal.component';



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
    CopyComponent,
    TestComponent,
    BreakPointComponent,
    TemplatePortalComponent
  ],
  imports: [
    CoreModule,
    CdkRoutingModule
  ]
})
export class CdkModule { }
