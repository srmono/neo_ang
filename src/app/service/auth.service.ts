import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router) { }

  login({email, password}: any): Observable<any>{
    if(email === "admin@gmail.com" && password === "admin123$"){
        this.setToken("DFLKJDLFkdlfkj*&987k3jd9");
        return of({name: "venkat", email: "admin@gmail.com"})
    }
    return throwError(new Error("Failed to login"))
  }

  setToken(token: string): void{
    localStorage.setItem("token", token)
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    return this.getToken() !== null
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }

}
