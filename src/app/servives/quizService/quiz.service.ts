import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  //........Admin related Services....................//

  public addQuiz(quizBody: any) {
    return this.http.post(`${baseUrl}/quiz/`, quizBody)
  }

  public getAllQuiz() {
    return this.http.get(`${baseUrl}/quiz/`)
  }

  public getQuizOfCategory(id: any) {
    return this.http.get(`${baseUrl}/quiz/category/` + id)
  }

  public updateQuiz(body: any) {
    return this.http.put(`${baseUrl}/quiz/`, body)
  }

  public getQuizById(id: any) {
    return this.http.get(`${baseUrl}/quiz/` + id)
  }

  public deleteQuiz(id: any) {
    return this.http.delete(`${baseUrl}/quiz/` + id)
  }


  //........User related Services....................//


  public getActiveQuizes() {
    return this.http.get(`${baseUrl}/quiz/active`)
  }

  public getActiveQuizesByCategoryId(category_id: any) {
    return this.http.get(`${baseUrl}/quiz/category/active/`+ category_id)
  }







}



