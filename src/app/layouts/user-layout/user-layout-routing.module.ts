import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { AddUsers2Component } from './user-layout/add-users2/add-users2.component';
import { Dashboard2Component } from './user-layout/dashboard2/dashboard2.component';

export const UserLayoutRoutes: Routes = [
  
  { path: "dashboard2", component: Dashboard2Component }, 
  { path: "add-users2", component: AddUsers2Component }, 
  { path: "list-of-users2", component: ListOfUsersComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(UserLayoutRoutes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
