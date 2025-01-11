import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router){}

  formUser = new FormGroup({
    username: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("",[Validators.required, Validators.minLength(10)])
  })

  loginUser(){
    this.authService.loginUser(this.formUser.value).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
