import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servives/loginServices/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private loginService: LoginService, private route: Router) { }



  sendLoginData() {
    console.log(this.loginForm.value)
    this.loginService.generateToken(this.loginForm.value).subscribe((response: any) => {
      console.log(response);
      this.loginService.loginUser(response.token);
      this.loginService.getCurrentUser().subscribe((response: any) => {
        console.log(response);
        this.loginService.setUser(response);

        if (this.loginService.getUserRole() == "ADMIN") {
          this.route.navigate(['admin-dashboard/admin-home']);
          this.loginService.loginStatusSubject.next(true)
          
        }
        else if (this.loginService.getUserRole() == "NORMAL") {
          this.route.navigate(['user-dashboard/user-home']);
          this.loginService.loginStatusSubject.next(true)
        }
        else {
          this.loginService.logOut()
        }
      },


        (err) => console.log(err));
    },

      (err) => {
        console.log(err),
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'INVALID USER',
          timer: 2000
        })
      });

  }
}


