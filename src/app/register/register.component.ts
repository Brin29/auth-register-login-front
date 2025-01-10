import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

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
    firstName: "assasaa",
    lastName: "sasa",
    username: "ssassaasssasaasasaa13112123121asasaa",
    password: "sasasa2"
  }

  ngOnInit(): void {
  }

  enviarData(){
    this.authService.registerUser(this.user).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })

    this.authService.viewData().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
    
  }

}
