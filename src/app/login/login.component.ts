import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { project,PolicyEntry } from '../form.model';
import { NameService } from '../services/name.service';
import { Router} from '@angular/router';
import { Login } from '../Login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 // log : Login = new Login();
 username: string="";
 password: string="";

email :string="";
constructor(private service:ProjectService,private router : Router,private nameService :NameService){
  localStorage.clear();
}

onSubmit() {
  // Create a Login object with the user's input
  const userLogin: Login = {
    email: this.username,
    password: this.password
  };
  //have a local username to grab the email given use that email to list data
  
  const isAuthenticated = this.service.validate(userLogin);
   if (isAuthenticated)
   {
     alert('Login successful!');
     //this.nameService.setEnteredName(this.nam);
     this.nameService.setEnteredName(this.email);//instead of name sending email to fetch the policies
    this.router.navigate(['/claim-dash']);
   } 
   else
   {
     alert('Invalid username or password. Please try again.');
   }


// }
// }


}
}