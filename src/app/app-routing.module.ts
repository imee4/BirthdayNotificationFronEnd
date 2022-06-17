import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'; 
import { UserLayoutComponent } from "./layouts/user-layout/user-layout/user-layout.component";
// import { AdminLayout2Component } from "./layouts/admin-layout2/admin-layout2.component";

const routes: Routes = [ 
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: "user",
    component: UserLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/user-layout/user-layout.module").then(m => m.UserLayoutModule)
      }
    ]
  },
   {
    path: "auth",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: "",
    redirectTo: "user/dashboard2",
    pathMatch: "full"
  },
  // {
  //   path: '**',
  //   redirectTo: '/not-found' //Error 404 - Page not found
  // }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
