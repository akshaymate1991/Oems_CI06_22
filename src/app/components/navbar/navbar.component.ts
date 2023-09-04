import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servives/loginServices/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn = true;
  user: any;

  constructor(private loginService: LoginService, private route: Router) {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();

    this.loginService.loginStatusSubject.asObservable().subscribe((response: any) => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();

    })

  }

  logOut() {
    this.loginService.logOut();
    this.loginService.loginStatusSubject.next(false);
    this.route.navigate([''])
  }



}
