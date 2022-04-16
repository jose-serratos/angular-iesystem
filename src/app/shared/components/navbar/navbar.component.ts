import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'iems-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  linksMenu: Array<any> = [
    {
      name: 'Bienvenido', 
      icon: '',
      router: ['/welcome']
    },
    {
      name: 'Conversiones', 
      icon: '',
      router: ['/convertion']

    },
    {
      name: 'Calcula Fecha', 
      icon: '',
      router: ['date']

    },
    {
      name: 'Formulario', 
      icon: '',
      router: ['form']
    },
  
  ]

  constructor(private cookie:CookieService, private router: Router) { }

  ngOnInit(): void {
  
  }

  logout(){
    this.cookie.delete('token');
    this.router.navigate(['/auth/login'])
  }


}
