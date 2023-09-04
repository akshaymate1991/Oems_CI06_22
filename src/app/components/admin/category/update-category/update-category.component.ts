import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/servives/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  updateCategoryForm = new FormGroup({

    category_id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)


  })
  category_id: any;
  constructor(private categoryService: CategoryService, private route: Router, private active: ActivatedRoute) {

    this.active.params.subscribe((response: any) => {
      console.log(response.id);
      this.category_id = response.id;
    });

    this.categoryService.getCategoryById(this.category_id).subscribe((response: any) => {
      console.log(response);
      this.updateCategoryForm.setValue(response)
    })
  }


  updateCategory() {
    console.log(this.updateCategoryForm.value);
    this.categoryService.updateCategory(this.updateCategoryForm.value).subscribe((response) => {
      console.log(response);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Succesfully',
        timer: 1500
      });
      this.route.navigate(['admin-dashboard/category'])
    })


  }


}
