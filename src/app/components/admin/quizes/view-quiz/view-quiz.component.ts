import { Component } from '@angular/core';
import { QuizService } from 'src/app/servives/quizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent {
  quiz_id: any;
  quizData: any;

  constructor(private quizService: QuizService) {
    this.viewQuiz();
  }

  viewQuiz() {
    this.quizService.getAllQuiz().subscribe((response: any) => console.log(this.quizData = response)
    )
  }

  deleteQuiz(quiz_id: any) {
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
          'Quiz has been deleted.',
          'success'
        )
        this.quizService.deleteQuiz(quiz_id).subscribe(response => {console.log(response);
        this.viewQuiz()})
      }
    })
   
  
  }




}
