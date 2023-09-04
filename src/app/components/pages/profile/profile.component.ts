import { Component } from '@angular/core';
import { LoginService } from 'src/app/servives/loginServices/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user = this.loginService.getUser()

  constructor(private loginService:LoginService){

    if(this.user.profile == "default.pgn"){   

      this.user.profile = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      
    }
  }

}

