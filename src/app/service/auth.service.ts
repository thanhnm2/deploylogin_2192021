import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {JWTResponse} from '../model/JWTResponse';
import {SignInForm} from '../model/SignInForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API_SERVER
  // private API_SIGNUP = environment.API_SERVER+'signup';
  // private API_SIGNIN = environment.API_SERVER+'signin';
//API_LOCAL
  private API_SIGNUP = environment.API_LOCAL+'signup';
  private API_SIGNIN = environment.API_LOCAL+'signin';
  constructor(private http: HttpClient) { }
  signup (signup: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signup);

  }
  signIn (SignIn: SignInForm): Observable<JWTResponse>{
    return this.http.post<JWTResponse>(this.API_SIGNIN, SignIn);
  }
}
