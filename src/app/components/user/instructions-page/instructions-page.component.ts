import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/servives/quizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions-page',
  templateUrl: './instructions-page.component.html',
  styleUrls: ['./instructions-page.component.css']
})
export class InstructionsPageComponent {
  quiz_Id: any;
  quiz: any;

  constructor(private quizService: QuizService, private active: ActivatedRoute, private route:Router) {

    this.active.params.subscribe((response: any) => {
      console.log(this.quiz_Id = response.quiz_id)
    })

    this.quizService.getQuizById(this.quiz_Id).subscribe((response: any) => {
      console.log(this.quiz = response);
      console.log(response)
    })
  }

  startExam(){
    Swal.fire({
      title: 'Start Exam',
      text: "Are you sure want to start the Exam ?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Start'
    }).then((result) => {
      if (result.isConfirmed) {
       this.route.navigate([`startExam/${this.quiz_Id}`])
      }
    })
  }

}
