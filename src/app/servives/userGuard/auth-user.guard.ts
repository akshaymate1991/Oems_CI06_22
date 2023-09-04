import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../loginServices/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {

  constructor(private loginService:LoginService, private route:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.loginService.isLoggedIn() && this.loginService.getUserRole()=="NORMAL"){
        return true};

        return false
      } 
      
  
}
