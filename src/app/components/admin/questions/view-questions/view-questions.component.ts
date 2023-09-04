import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/servives/questionService/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent {
  quiz_id: any;
  quiz_title: any;
  questions: any = [];

  constructor(private questionService: QuestionService, private active: ActivatedRoute) {
    this.active.params.subscribe((response: any) => {
      console.log(this.quiz_id = response.id);
      console.log(this.quiz_title = response.title);
      this.getAllQuestionsByQuizId()
    })
  }


  getAllQuestionsByQuizId() {
    this.questionService.getAllQuestionsByQuizId(this.quiz_id).subscribe((response: any) => console.log(this.questions = response));
    console.log(this.questions)
  }

  deleteQuestion(question_id: any) {

    Swal.fire({
      position: 'center',
      title: 'Are you sure ?',
      text: 'You wont be able to revert this',
      icon: 'warning',
      showCancelButton: true,

    }).then((result) => {
      if (result.isConfirmed) {
        this.questionService.deleteQuestionById(question_id).subscribe((response: any) => {
          console.log(response);
          this.getAllQuestionsByQuizId()
        });

        Swal.fire({
          title: ' Deleted !',
          text: 'Question has been Deleted',
          icon: 'success'
        })
      }
    })

  }

}
