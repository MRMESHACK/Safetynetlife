import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../Login.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  credentials :Login[]=[];

  private static baseUrl : string = "http://localhost:3000";

  constructor(private http:HttpClient) {
  
this.http.get<Login[]>(ProjectService.baseUrl+"/project/").subscribe(data => this.credentials=data);
  }


persist(login : Login)
{
  this.http.post(ProjectService.baseUrl+"/project/", login).subscribe(data=>data=login)

}
   validate(cred : Login):boolean{

     for(let i=0 ; i<this.credentials.length; i++)
        {

       if(cred.email==this.credentials[i].email && cred.password ==this.credentials[i].password)
       return true;
        }
 return false;
  
}
}