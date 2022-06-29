import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthUser } from './resources/auth-user';
import { Role } from './resources/role'; 

export interface LoginResponse {
    access_token: string;
    token_type: string;
    user: {
      id:number;
      profile_id:number;
      user_type_id:number;
      email: string;
      password:string;
    };
    role: Role;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<AuthUser>;

  //private
  private currentUserSubject: BehaviorSubject<AuthUser>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<AuthUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): AuthUser {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is admin
   */
  get isSuper() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Super;
  }

  /**
   *  Confirms if user is client
   */
  get isAdmins() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    return this._http
      .post<LoginResponse>(`${environment.apiUrl}api/login`, { email, password })
      .pipe(
        map(response => {
          // login successful if there's a jwt token in the response
          if (response && response.access_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            console.log(response.access_token);
            const responseUser = response.user;
            let authUser = new AuthUser();
            authUser = { ...responseUser, role: response.role, token: response.access_token, avatar: "avatar-s-11.jpg" };
            // console.log("Auth User: ", authUser);
            // Display welcome toast!
            localStorage.setItem('currentUser', JSON.stringify(authUser));
            // this.router.navigate(['items'], { relativeTo: this.route });
            setTimeout(() => {
              this._toastrService.show(
                'You have successfully logged in as' +
                  ' User ' + 
                  'to Birthday Notification. Now you can start to explore. Enjoy!',
                '👋 Welcome, ' + authUser.email + '!',
                { toastClass: 'toast ngx-toastr', positionClass: 'toast-top-center',closeButton: true }
                // { toastClass: 'toast ngx-toastr', positionClass: ' toast-top-right', closeButton: true }
              );
            }, 4000);

            // notify
            this.currentUserSubject.next(authUser);
          }

          return response;
        })
      );
  }

  

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify
    this.currentUserSubject.next(null);
  }
}