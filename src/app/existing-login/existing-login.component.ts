import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Router} from '@angular/router';
import { Login } from '../Login.model';

@Component({
  selector: 'app-existing-login',
  templateUrl: './existing-login.component.html',
  styleUrls: ['./existing-login.component.css']
})
export class ExistingLoginComponent {

  username: string="";
  password: string="";
 
 
 constructor(private service:ProjectService,private router : Router){
   localStorage.clear();
 }
 
 onSubmit() {
   // Create a Login object with the user's input
   const userLogin: Login = {
     email: this.username,
     password: this.password
   };
   const isAuthenticated = this.service.validate(userLogin);
 
    if (isAuthenticated)
    {
      alert('Login successful!');
     this.router.navigate(['/existing-form']);
    } 
    else
    {
      alert('Invalid username or password. Please try again.');
    }
 
 
 // }
 // }
 
 
 }
 }
