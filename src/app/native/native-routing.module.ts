import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { NativeComponent } from './native.component';


const routes: Routes = [
  { path: '', component: NativeComponent },
  { path: 'custom-modal', component: CustomModalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NativeRoutingModule { }
