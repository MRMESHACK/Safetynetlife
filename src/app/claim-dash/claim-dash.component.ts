import { Component, OnInit } from '@angular/core';
import { project, PolicyEntry } from '../form.model';
import { PolicyService } from '../services/policy.service';
import { NameService } from '../services/name.service';
import { tap } from 'rxjs';




@Component({
  selector: 'app-claim-dash',
  templateUrl: './claim-dash.component.html',
  styleUrls: ['./claim-dash.component.css']
})
export class ClaimDashComponent {
  filteredProject: project | null = null;
  allProjects: project[] = [];
 
  claimed: boolean = false;
  currentlyClaimedPolicy: PolicyEntry | null = null;
  constructor(private service: PolicyService, private nameService: NameService) { }

  
      
  // Handle any further actions or notifications on successful claim
    
  claimPolicy(policy: PolicyEntry) {
    // Update the policy status to "Claimed"
    policy.status = 'Claimed';
  policy.isclaimed=true;
    // Call the service method to update the policy status on the server
    if(this.filteredProject)
    {
    this.service.updatePolicyStatus(this.filteredProject.name, policy.relationship, policy.tot, 'Claimed')
      .pipe(
        tap((updatedPolicy: any) => {
          console.log('Policy updated successfully:', updatedPolicy);
          this.claimed = true;
          this.currentlyClaimedPolicy = policy;
          // Handle any further actions or notifications on successful claim
          
        }),
      
      )
      .subscribe();
    }

  }


  ngOnInit(): void {
    const nameFromForm = this.nameService.getEnteredName();

    this.service.list().subscribe(data => {
      this.allProjects = data;
      this.filteredProject = this.getProjectByName(nameFromForm);//instead here add email
    });
  }
  


  getProjectByName(name: string): project | null {
    return this.allProjects.find(project => project.email === name) || null;//project.email update to have email also and from login-new get the email
  }


  isPolicyClaimed(policy: PolicyEntry): boolean {
    return this.currentlyClaimedPolicy === policy;
  }
}

