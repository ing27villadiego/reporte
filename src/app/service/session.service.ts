import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private http: HttpClient
  ) { }

  login(usuario:string, password:string) {
    return this.http.post('https://reqres.in/api/login', {
      usuario,
      password,     
    });     
  }

}
