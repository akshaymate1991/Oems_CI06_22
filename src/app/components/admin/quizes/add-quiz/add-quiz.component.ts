import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/servives/categoryService/category.service';
import { QuizService } from 'src/app/servives/quizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {

  addQuizData = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    maxMarks: new FormControl('', Validators.required),
    numberOfQuestions: new FormControl('', Validators.required),
    active: new FormControl('', Validators.required),
    category_id: new FormControl('', Validators.required),
  })

  categoryId: any
  constructor(private quizService: QuizService, private categoryService: CategoryService, private route:Router) {
    this.categoryService.getAllCategory().subscribe((response: any) => {
      console.log(this.categoryId = response);
    })
  }

  addQuiz() {
  
    let addQuizObject = {
      title: this.addQuizData.value.title,
      description: this.addQuizData.value.description,
      maxMarks: this.addQuizData.value.maxMarks,
      numberOfQuestions: this.addQuizData.value.numberOfQuestions,
      active: this.addQuizData.value.active,
      category: {
        category_id: this.addQuizData.value.category_id
      }
    }

    console.log(addQuizObject);
    this.quizService.addQuiz(addQuizObject).subscribe((response: any) => {
      console.log(addQuizObject);
      Swal.fire({
        position:'center',
        icon:'success',
        title:`${response.title}`,
        timer:2500,
        text:'Quiz Added in' + `${response.category}`
      }),
      this.route.navigate(['admin-dashboard/quiz'])
    })
  }


}

