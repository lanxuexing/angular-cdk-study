import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdkComponent } from './cdk.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { FocusKeyManagerComponent } from './focus-key-manager/focus-key-manager.component';

const routes: Routes = [
  { path: '', component: CdkComponent },
  { path: 'focus-trap', component: FocusTrapComponent },
  { path: 'focus-key-manager', component: FocusKeyManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkRoutingModule { }
