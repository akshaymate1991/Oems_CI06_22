import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/servives/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  addCategoryData = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  constructor(private categoryService: CategoryService, private route: Router) { }

  addCategory() {
    console.log(this.addCategoryData.value);
    this.categoryService.addCategory(this.addCategoryData.value).subscribe((response: any) => {
      console.log(response);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Category Added succesfully',
        timer: 1000
      });
      this.route.navigate(['/admin-dashboard/category']);
    }, (err) => console.log(err));


  }







}


