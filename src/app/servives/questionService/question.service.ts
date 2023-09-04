import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  constructor(private http: HttpClient) { }



  public getAllQuestionsByQuizId(quiz_id: any) {
    return this.http.get(`${baseUrl}/question/quiz/all/` + quiz_id)
  }

  public addQuestion(body: any) {
    return this.http.post(`${baseUrl}/question/`, body)
  }

  public updateQuestion(body: any) {
    return this.http.put(`${baseUrl}/question/`, body)
  }

  public getQuestionsById(question_id: any) {
    return this.http.get(`${baseUrl}/question/` + question_id)
  }

  public deleteQuestionById(questionId: any) {
    return this.http.delete(`${baseUrl}/question/` + questionId)
  }

  public getQuestionsOfQuizForTest(quiz_id: any) {
    return this.http.get(`${baseUrl}/question/quiz/` + quiz_id)
  }

  public directSubmit(question: any) {
    return this.http.post(`${baseUrl}/question/direct-quiz/`, question)
  }






}
