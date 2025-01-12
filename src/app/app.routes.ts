import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    {path: "", component: RegisterComponent, title: "Register"},
    {path: "login", component: LoginComponent, title: "Login"},
    {path: "home", component: HomeComponent, canActivate: [AuthGuardService]  ,title: "Home"}
];
