import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdkComponent } from './cdk.component';
import { FocusTrapComponent } from './accessibility/focus-trap/focus-trap.component';
import { FocusKeyManagerComponent } from './accessibility/focus-key-manager/focus-key-manager.component';
import { FocusMonitorComponent } from './accessibility/focus-monitor/focus-monitor.component';
import { FocusMonitorViaComponent } from './accessibility/focus-monitor-via/focus-monitor-via.component';
import { FocusMonitorDirectiveComponent } from './accessibility/focus-monitor-directive/focus-monitor-directive.component';
import { BidiComponent } from './bidirectionality/bidi/bidi.component';
import { CopyComponent } from './clipboard/clipboard/copycomponent';
import { BreakPointComponent } from './layout/break-point/break-point.component';

const routes: Routes = [
  { path: '', component: CdkComponent },
  { path: 'focus-trap', component: FocusTrapComponent },
  { path: 'focus-key-manager', component: FocusKeyManagerComponent },
  { path: 'focus-monitor', component: FocusMonitorComponent },
  { path: 'focus-monitor-via', component: FocusMonitorViaComponent },
  { path: 'focus-monitor-directive', component: FocusMonitorDirectiveComponent },
  { path: 'bidi', component: BidiComponent },
  { path: 'clipboard', component: CopyComponent },
  { path: 'layout-break-point', component: BreakPointComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkRoutingModule { }
