import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/servives/categoryService/category.service';
import { QuizService } from 'src/app/servives/quizService/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {

  updateQuizForm = new FormGroup({
    quiz_id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    maxMarks: new FormControl('', Validators.required),
    numberOfQuestions: new FormControl('', Validators.required),
    active: new FormControl('', Validators.required),
    category_id: new FormControl('', Validators.required),
  })

  quiz_Id: any
  category_Id: any;
  updateQuizData: any;

  constructor(private quizService: QuizService, private route: Router, private active: ActivatedRoute, private categoryService: CategoryService) {

    this.active.params.subscribe((response: any) => {
      this.quiz_Id = response.id;
      console.log(response.id);
    })

    this.categoryService.getAllCategory().subscribe((response: any) => {
      this.category_Id = response;
      console.log(this.category_Id)
    })

    this.quizService.getQuizById(this.quiz_Id).subscribe((response: any) => {
      this.updateQuizData = response;
      console.log(this.updateQuizData = response);
    })

  }



  updateQuiz(body:any) {
    let updateQuizObject = {
      quiz_id: this.updateQuizForm.value.quiz_id,
      title: this.updateQuizForm.value.title,
      description: this.updateQuizForm.value.description,
      maxMarks: this.updateQuizForm.value.maxMarks,
      numberOfQuestions: this.updateQuizForm.value.numberOfQuestions,
      active: this.updateQuizForm.value.active,
      category: {
        category_id: this.updateQuizForm.value.category_id
      }
    }
    console.log(this.updateQuizForm.value)
    this.quizService.updateQuiz(updateQuizObject).subscribe((response:any)=>console.log(response));
    this.route.navigate(['/admin-dashboard/quiz/'])
  }


}






