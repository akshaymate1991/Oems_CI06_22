import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/servives/quizService/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent {

  quizes: any;
  category_Id: any;

  constructor(private quizService: QuizService, private active: ActivatedRoute) {

    this.active.params.subscribe((response: any) => {
      this.category_Id = response.category_id;
      console.log(this.category_Id);

      if (this.category_Id == 0) {
        this.quizService.getActiveQuizes().subscribe((response: any) => {
          this.quizes = response
        })
      }
      else {
        this.quizService.getActiveQuizesByCategoryId(this.category_Id).subscribe((response: any) => {
          this.quizes = response
        })
      }
    })

  }

  

}


