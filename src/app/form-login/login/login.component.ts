import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';
import {SignInForm} from '../../model/SignInForm';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  status = 'Please fill in the form to LOGIN --->'
  form: any = {};
  hide = true;
  // roles: string[] = [];
  // name: string;
  signInForm: SignInForm;
  checkLogin = false;
  constructor(private  authService: AuthService,
              private tokenService: TokenService,
              private router: Router) { }



  ngOnInit(): void {
  }
  ngSubmit(){
  this.signInForm = new SignInForm(
    this.form.username,
    this.form.password
  )
    this.authService.signIn(this.signInForm).subscribe(data =>{
      if(data.token!=undefined){
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRoles(data.roles);
        this.router.navigate(['user-account'])

      }
      else{
        this.status = 'login loi'
        this.checkLogin = true;
      }
    })
}


}
