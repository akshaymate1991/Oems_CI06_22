import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/servives/questionService/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent {

  updateQuestionsData = new FormGroup({

    content: new FormControl('', Validators.required),
    option1: new FormControl('', Validators.required),
    option2: new FormControl('', Validators.required),
    option3: new FormControl('', Validators.required),
    option4: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
  })
  question_id: any;
  quiz_title: any;
  question: any = []

  constructor(private questionService: QuestionService, private active: ActivatedRoute, private route: Router) {

    this.active.params.subscribe((response: any) => {
      console.log(this.question_id = response.id);
      console.log(this.quiz_title = response.title);
    })

    this.questionService.getQuestionsById(this.question_id).subscribe((response: any) => {
      console.log(this.question = response)
    })
  }


  updateQuestions() {
    console.log(this.updateQuestionsData.value);

    let question = {
      question_id:this.question.question_id,
      content: this.updateQuestionsData.value.content,
      option1: this.updateQuestionsData.value.option1,
      option2: this.updateQuestionsData.value.option2,
      option3: this.updateQuestionsData.value.option3,
      option4: this.updateQuestionsData.value.option4,
      answer: this.updateQuestionsData.value.answer,
      quiz: {
        quiz_id: this.question.quiz.quiz_id
      }
    };
    Swal.fire({
      position: 'center',
      title: 'Proceed to update ?',
      text: 'You wont be able to revert this',
      icon: 'warning',
      showCancelButton: true,

    }).then((result) => {
      if (result.isConfirmed) {
        this.questionService.updateQuestion(this.question).subscribe((response: any) => {
          console.log(response);
          this.route.navigate([`/admin-dashboard/view-questions/${this.question.quiz.quiz_id}/${this.quiz_title}`])
        });
        Swal.fire({
          title: ' Updated !',
          text: 'Question has been updated',
          icon: 'success'
        })
      }
    })

  }
}
