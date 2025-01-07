import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = environment.apiUrl;
  

  // Permite hacer las peticiones a la API
  constructor(private http: HttpClient) {
    
  }

  getInfo(){
    return  this.http.get(`${this.url}/authorization/prueba`, { responseType:
      "text"
     });
  }

  registerUser(user:any){
    const myHeaders = new HttpHeaders({"Content-Type": "application/json"})
    return this.http.post(`${this.url}/authorization/register`, user, {headers: myHeaders})
  }
}