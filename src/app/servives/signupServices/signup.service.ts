import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }


  public saveUser(body: any) {
    return this.http.post(`${baseUrl}/user/`, body)
  }

  public deleteUser(id: number) {
    return this.http.delete(`${baseUrl}/user/${id}` + id, { responseType: 'text' })
  }

}
