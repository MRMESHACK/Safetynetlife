import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { PolicyService } from '../services/policy.service';
import { NameService } from '../services/name.service';
import { project,PolicyEntry } from '../form.model';
import { Login } from '../Login.model';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent {
  login: Login = new Login(); 
  project:project=new project();
  //email :string ="";
  constructor(private http: HttpClient, private projectService: ProjectService,private policyService:PolicyService,private nameService:NameService) { }
  persist() {
    
    // Call the service's persist method and pass the login data
    //service call to policy using project.name and 
    
    this.policyService.persist1(this.nameService.getEnteredName(),this.project.email);
    this.projectService.persist(this.login);
  }

  }
