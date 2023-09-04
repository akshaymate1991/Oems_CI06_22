import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/servives/categoryService/category.service';
import { LoginService } from 'src/app/servives/loginServices/login.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {

  allCategoriesData: any;

  constructor(private categoryService: CategoryService,private loginService: LoginService, private route:Router) {
    this.categoryService.getAllCategory().subscribe((response: any) => {
      this.allCategoriesData = response;
      console.log(this.allCategoriesData);

    })
  }

  logout() {
    this.loginService.logOut();
    this.loginService.loginStatusSubject.next(false);
    this.route.navigate([''])
  }
}

 


