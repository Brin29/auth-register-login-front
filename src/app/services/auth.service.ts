import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  // Permite hacer las peticiones a la API
  constructor(private http: HttpClient) {

  }



  registerUser(user:any): Observable<any>{
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "http://localhost:8080"
    })
    return this.http.post("/api/auth/register", user,{headers})
  }

  loginUser(user:any): Observable<any>{
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "http://localhost:8080"
    })
    return this.http.post("/api/auth/login", user, {headers})
  }
}