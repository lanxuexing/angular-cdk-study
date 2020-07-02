import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material.component';
import { IconComponent } from './icon/icon.component';


const routes: Routes = [
  { path: '', component: MaterialComponent },
  { path: 'icon', component: IconComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
