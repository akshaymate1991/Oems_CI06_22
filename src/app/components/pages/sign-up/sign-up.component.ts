import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/servives/signupServices/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm = new FormGroup({

    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),

  })

  constructor(private signupService: SignupService, private route: Router) { }

  sendRegistrationData() {
    console.log(this.signUpForm.value)
    this.signupService.saveUser(this.signUpForm.value).subscribe((response) => {
      console.log(response);
      this.route.navigate(['signin']);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User Saved Succesfully',
        timer: 1500
      });
      (err:any)=>{console.log(err);
      Swal.fire({
        position:'center',
        icon:'error',
        title:'Invalid Login Credentials',
        timer:1500

      });}
    
    })
  }

}
