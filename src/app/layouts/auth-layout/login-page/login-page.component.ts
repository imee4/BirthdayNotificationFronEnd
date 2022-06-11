import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { CoreConfigService } from '@core/services/config.service';
import { Subject } from 'rxjs';
// import { first, takeUntil } from 'rxjs/operators';
// import { LoginRequestDto } from '../auth.model';
// import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
//  Public
  public coreConfig: any;
  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  public passwordTextType: boolean;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    // private _coreConfigService: CoreConfigService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    // private _authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    // if (this._authenticationService.currentUserValue) {
    //   this._router.navigate(['/landing']);
    // }

    this._unsubscribeAll = new Subject();

    // Configure the layout
    // this._coreConfigService.config = {
    //   layout: {
    //     navbar: {
    //       hidden: true
    //     },
    //     menu: {
    //       hidden: true
    //     },
    //     footer: {
    //       hidden: true
    //     },
    //     customizer: false,
    //     enableLocalStorage: false
    //   }
    // };
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // Login
    this.loading = true;

    // const credentials: LoginRequestDto = {
    //   email: this.f.email.value,
    //   password: this.f.password.value,
    // }

    // this._authenticationService
    //   .login(credentials)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this._router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.error = error;
    //       this.loading = false;
    //     }
    //   );
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['admin@demo.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    // Subscribe to config changes
    // this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
    //   this.coreConfig = config;
    // });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    // this._unsubscribeAll.next();
    // this._unsubscribeAll.complete();
  }
}
