import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsers2Component } from './user-layout/add-users2/add-users2.component';
import { Dashboard2Component } from './user-layout/dashboard2/dashboard2.component';

export const UserLayoutRoutes: Routes = [
  
  { path: "dashboard2", component: Dashboard2Component }, 
  { path: "add-users2", component: AddUsers2Component },  
];

@NgModule({
  imports: [RouterModule.forChild(UserLayoutRoutes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
