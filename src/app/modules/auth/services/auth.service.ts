import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService  } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;
  constructor(private http:HttpClient, private cookie:CookieService) { }

  sendCredentials(username:string , password:string):Observable<any> {
    const body = {
        username,
        password
    }
    return this.http.post(`${this.URL}/login`,body)
    .pipe(
      tap((response:any ) => {
        const  { data: {token }} = response;
        this.cookie.set('token', token, 4, '/')
      })
    );
  }
}
