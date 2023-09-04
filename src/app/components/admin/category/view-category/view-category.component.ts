import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/servives/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {

  constructor(private categoryService: CategoryService, private route: Router) {
    this.viewCategory();

  }
  data: any
  viewCategory() {
    this.categoryService.getAllCategory().subscribe(response => console.log(this.data = response))
  }

  deleteCategory(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Category has been deleted.',
          'success'
        )
        this.categoryService.deleteCategory(id).subscribe((response) => { console.log(response), 
          this.viewCategory() })
       
        

      }
    })
  }

}
