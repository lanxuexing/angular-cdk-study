import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdkComponent } from './cdk.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { FocusKeyManagerComponent } from './focus-key-manager/focus-key-manager.component';
import { FocusMonitorComponent } from './focus-monitor/focus-monitor.component';
import { FocusMonitorViaComponent } from './focus-monitor-via/focus-monitor-via.component';
import { FocusMonitorDirectiveComponent } from './focus-monitor-directive/focus-monitor-directive.component';

const routes: Routes = [
  { path: '', component: CdkComponent },
  { path: 'focus-trap', component: FocusTrapComponent },
  { path: 'focus-key-manager', component: FocusKeyManagerComponent },
  { path: 'focus-monitor', component: FocusMonitorComponent },
  { path: 'focus-monitor-via', component: FocusMonitorViaComponent },
  { path: 'focus-monitor-directive', component: FocusMonitorDirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkRoutingModule { }
