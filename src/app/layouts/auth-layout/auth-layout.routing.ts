import { Routes } from '@angular/router';

import { RtlComponent } from '../../pages/rtl/rtl.component'; 
import { LoginPageComponent } from './login-page/login-page.component';


export const AuthLayoutRoutes: Routes = [
    
    { path: 'login',          component: LoginPageComponent },
    
    // { path: 'rtl',          component: RtlComponent },
];
