import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/servives/questionService/question.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent {

  isSubmit: boolean = false;
  question: any;
  timer: any;

  marksGot: any = 0;
  correctAnswers: any = 0;
  attempted: any = 0;
  quiz_Id: any;


  constructor(private questionService: QuestionService, private active: ActivatedRoute, private locationStrategy: LocationStrategy) {
    this.active.params.subscribe((response: any) => {
      console.log(this.quiz_Id = response.quiz_id)
    })

    this.questionService.getQuestionsOfQuizForTest(this.quiz_Id).subscribe((response: any) => {
      console.log(this.question = response);
      this.timer = this.question.length*0.60*100;
    })

    this.startTimer();
    this.preventBackButton()

  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        clearInterval(t);
      }
      else {
        this.timer --;
      }
    }, 1000)
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm}:${ss}`
  }

  preventBackButton() {
    history.pushState(null, location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, location.href)
    })
  }

  directSubmitExam(){
    console.log(this.question);
    this.questionService.directSubmit(this.question).subscribe((response: any) => {
      console.log(response);
      this.attempted = response.attempted;
      this.marksGot = parseFloat(Number(response.marksGot).toFixed(2))
      this.correctAnswers = response.correctAnswer;
      this.isSubmit = true;
    })
  }

  printResults(){
    window.print()
  }

}
