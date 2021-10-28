import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  
  getImage(){
    let url="http://api.linkpreview.net/?key=123456&q=https://www.google.com/";
    return this.http.get(url);
  }

}
