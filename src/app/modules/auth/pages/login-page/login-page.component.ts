import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'iems-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  session = {exito:true, mensaje:''};
  constructor(private _authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        username: new FormControl('', [
          Validators.required,
        ]),
        password: new FormControl('', [
          Validators.required
        ]),
      }
    )


  }

  sendDataLogin() {
    const { username, password } = this.formLogin.value;

    this._authService.sendCredentials(username, password)
    .subscribe((resp)=>{
      this.router.navigate(['/welcome']);
    },error => {
      const { error: {exito, mensaje}} = error;
      this.handleResponse(exito,mensaje);
    })
  }

  handleResponse(exito = false, mensaje = '') {
    this.session.exito = exito;
    this.session.mensaje = mensaje;
    setTimeout(()=> {
      this.session.exito = true;
    },1500)
  }
  

}
