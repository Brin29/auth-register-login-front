import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  formUser = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    username: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(10), Validators.required])
  });


  registerUser(){
    this.authService.registerUser(this.formUser.value).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
