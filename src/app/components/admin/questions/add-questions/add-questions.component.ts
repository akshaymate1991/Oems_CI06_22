import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/servives/questionService/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})

export class AddQuestionsComponent {

  addQuestionsForm = new FormGroup({
    
    content: new FormControl('', Validators.required),
    option1: new FormControl('', Validators.required),
    option2: new FormControl('', Validators.required),
    option3: new FormControl('', Validators.required),
    option4: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
  })

  quiz_id: any;
  quiz_title: any;

  constructor(private questionService: QuestionService, private active: ActivatedRoute, private route: Router) {
    
    this.active.params.subscribe((response: any) => {
      this.quiz_id = response.id;
      this.quiz_title = response.title;
    })
    console.log(this.quiz_id);
    console.log(this.quiz_title);
  }

  question = {
    content: this.addQuestionsForm.value.content,
    option1: this.addQuestionsForm.value.option1,
    option2: this.addQuestionsForm.value.option2,
    option3: this.addQuestionsForm.value.option3,
    option4: this.addQuestionsForm.value.option4,
    answer: this.addQuestionsForm.value.answer
  } 

  addQuestions() {

    let question = {
      content: this.addQuestionsForm.value.content,
      option1: this.addQuestionsForm.value.option1,
      option2: this.addQuestionsForm.value.option2,
      option3: this.addQuestionsForm.value.option3,
      option4: this.addQuestionsForm.value.option4,
      answer: this.addQuestionsForm.value.answer,
      quiz: {
        quiz_id: this.quiz_id
      }
    }

    console.log(this.addQuestionsForm.value);
    this.questionService.addQuestion(question).subscribe((response: any) => {
      console.log(response);
      Swal.fire({
        position: 'center',
        title: `${response.content}`,
        text: 'Question added Successfully',
        icon: 'success'
      })
      this.route.navigate([`/admin-dashboard/view-questions/${this.quiz_id}/${this.quiz_title}`])
    },
      (err) => {
        Swal.fire({
          position: 'center',
          title: 'Something went wrong',
          text: 'Question added Successfully',
          icon: 'error'
        })

      })
  }

}
