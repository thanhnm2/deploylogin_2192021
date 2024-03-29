import { Injectable } from '@angular/core';
import {J} from '@angular/cdk/keycodes';
const TOKEN_KEY = 'Token_key';
const NAME_KEY = 'Name_key';
const ROLE_KEY = 'Role_key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];
  constructor() { }
  public setToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
   return window.sessionStorage.getItem((TOKEN_KEY));
  }
  public setName(name: string){
    window.sessionStorage.removeItem((NAME_KEY));
    window.sessionStorage.setItem(NAME_KEY, name);
  }
  public getName(): string{
    return window.sessionStorage.getItem((NAME_KEY));
  }
  public setRoles(roles: string[]){
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }
  public getRoles(): string[]{
    this.roles = [];
    if (sessionStorage.getItem(TOKEN_KEY)){
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        this.roles.push(role.authority)
      })
  }
    return this.roles;
  }

}
