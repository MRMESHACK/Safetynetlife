import { Component } from '@angular/core';

import { PolicyService } from '../services/policy.service';

import { project,PolicyEntry } from '../form.model';
import { NameService } from '../services/name.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  project: project = new project();
  policy:PolicyEntry=new PolicyEntry();

   nam:string="";
  sal:number=0;
  tim : number=0;
  lifecov:number=0;
  tot:number=0;
 
  dura:number=0;
 
 
 
text :string="";
text1 :string="";
  
  constructor(private service: PolicyService, private nameService: NameService) { }

  first() {
    this.lifecov=5000000;
    this.policy.lifecover = "50 LAKHS";
    this.text="You selected 50Lakhs"

  }

  second() {
     this.lifecov=10000000;
    this.policy.lifecover ="1 CR";
    this.text="You selected 1CR"
  }

  third() {
     this.lifecov=150000000;
   this.policy.lifecover ="1.5 CR";
   this.text="You selected 1.5CR"
  }

  update(value: number) {
    this.tim = value;
   
     if(value==12)
     {
    this.policy.time="Monthly"
    this.text1="You Clicked Monthly"
     }
   
   else if(value==4)
   {
    this.policy.time="Quaterly"
    this.text1="You Clicked Quaterly"
   }
    else 
    {
    this.policy.time="Annually"
    this.text1="You Clicked Annually"
    }

    this.tot=((this.lifecov/(this.dura * 12)) * 0.15)/(this.tim)
   
    // Assuming this.tot is a number with more than two decimal places
this.policy.tot = Number(this.tot.toFixed(2));
  }

//   cal()
//   {
//     this.tot=((this.lifecov/(this.dura * 12)) * 0.15)/(this.tim)
   
//     // Assuming this.tot is a number with more than two decimal places
// this.policy.tot = Number(this.tot.toFixed(2));

//   }

 
  //for existing username the logic is different

  

  persist()
  {
    
       this.policy.status="ACTIVE";
this.nameService.setEnteredName(this.nam);
  

  this.service.persist(this.project,this.policy);
  }
  


  }



  // console.log("Persist called...");
  // // this.policy.id = uuidv4();
  //  this.nameService.setEnteredName(this.nam);
  //  console.log(this.nameService.getEnteredName());
 
  //  this.service.getProjectByName(this.project.name).subscribe(existingProject => {
  //    if (existingProject) {
  //      // If the project exists, add the policy to the existing project
  //      //existingProject.policies.push(this.policy); // Add the policy to the existing project's policies array
  //      this.service.persist(existingProject, this.policy);
  //    } else {
  //      // If the project does not exist, create a new project with the policy
  //      this.project.policies.push(this.policy); // Initialize the policies array with the new policy
  //      this.service.persist(this.project, this.policy);
  //    }
  //  });

