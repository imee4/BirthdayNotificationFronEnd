import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'; 
import { Subject } from 'rxjs';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CoreConfigService } from '@core/services/config.service';
// import { Subject } from 'rxjs';
// import { first, takeUntil } from 'rxjs/operators';
// import { LoginRequestDto } from '../auth.model';
// import { AuthenticationService } from '../authentication.service';

@Component({
  
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class LoginPageComponent implements OnInit {

   
  constructor( ) {}
 
  
  ngOnInit(): void {
   
  }

}
