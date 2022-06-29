import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, NgSelectOption } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component"; 

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LandingComponent } from './landing/landing.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { AddGroupComponent } from './components/add-group/add-group.component'; 
// import { AddUsersComponent } from './add-users/add-users.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  

  ],
  declarations: [
    AppComponent,
    LandingComponent,
    PageNoFoundComponent,
    // ExistingUserComponent,
    // AddGroupComponent,  
    //  AdminLayoutComponent,
    //   AuthLayoutComponent,
      //  AddUsersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
