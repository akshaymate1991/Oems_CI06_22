import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCategory(){
    return this.http.get(`${baseUrl}/category/`)
  }

  addCategory(categoryData:any){
    return this.http.post(`${baseUrl}/category/`,categoryData, {responseType:'text'})
  }

  deleteCategory(id:any){
    return this.http.delete(`${baseUrl}/category/`+ id, {responseType:'text'})
  }

  getCategoryById(id:any){
    return this.http.get(`${baseUrl}/category/`+ id)
  }

  updateCategory(body:any){
    return this.http.put(`${baseUrl}/category/`, body)
  }
}
