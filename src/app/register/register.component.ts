import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  user = {
    firstName: "asa",
    lastName: "sasa",
    username: "sa",
    password: "sa"
  }

  header = new HttpHeaders()
    .set("content-type", "application/json")

  ngOnInit(): void {
    this.viewData()
    this.enviarData()
  }

  viewData(){
    this.authService.getInfo().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  enviarData(){
    this.authService.registerUser(this.user).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
