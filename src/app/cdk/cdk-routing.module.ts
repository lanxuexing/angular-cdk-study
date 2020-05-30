import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdkComponent } from './cdk.component';

const routes: Routes = [{ path: '', component: CdkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkRoutingModule { }
