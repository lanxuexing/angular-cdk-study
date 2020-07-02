import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cdk', pathMatch: 'full' },
  { path: 'cdk', loadChildren: () => import('./cdk/cdk.module').then(m => m.CdkModule) },
  { path: 'native', loadChildren: () => import('./native/native.module').then(m => m.NativeModule) },
  { path: 'material', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
