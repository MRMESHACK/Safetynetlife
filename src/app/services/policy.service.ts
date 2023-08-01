import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { project, PolicyEntry } from '../form.model';
import { Observable, map, switchMap, catchError } from 'rxjs'; // Import the switchMap operator



@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private static baseUrl: string = "http://localhost:4000";

  constructor(private http: HttpClient) { }
  list(): Observable<project[]> {
 return this.http.get<project[]>(`${PolicyService.baseUrl}/policy`);
}

persist(policy: project, pol: PolicyEntry) {
  this.getProjectByName(policy.name).subscribe(existingProject => {
    if (existingProject) {
      // If the project exists, add the policy to the existing project
existingProject.policies.push(pol);
this.http.put(`${PolicyService.baseUrl}/policy/${existingProject.name}`, existingProject)
  .subscribe(updatedProject => {
    console.log("Project updated successfully:", updatedProject);
  });
} 
else {
// If the project does not exist, create a new project with the policy
policy.policies.push(pol);
this.http.post(`${PolicyService.baseUrl}/policy`, policy)
  .subscribe(newProject => {
    console.log("New project created successfully:", newProject);
  });
}
});
}


//UPDATE FOR TOGGLING THE CLAIMS 

updatePolicyStatus(projectName: string, relationship: string, total: number, newStatus: string): Observable<PolicyEntry> {
  return this.getProjectByName(projectName).pipe(
    switchMap((existingProject: project | null) => {
      if (existingProject) {
        const policyToUpdate = existingProject.policies.find(policy =>
          policy.relationship === relationship && policy.tot === total
        );
        if (policyToUpdate) {
          policyToUpdate.status = newStatus;
          return this.updateProject(existingProject).pipe(
            map(updatedProject => policyToUpdate)
          );
        }
      }
      throw new Error("Policy not found or Project does not exist.");
    }),
    catchError(error => {
      throw new Error("Error updating policy status.");
    })
  );
}


private updateProject(projectToUpdate: project): Observable<project> {
  const url = `${PolicyService.baseUrl}/policy/${projectToUpdate.name}`;
  return this.http.put<project>(url, projectToUpdate);
}

getProjectByName(name: string): Observable<project | null> {
  return this.list().pipe(
    map((projects: project[]) => {
      const foundProject = projects.find((project: project) => project.name === name);
      return foundProject ? foundProject : null;
    })
  );

}


persist1(name: string, email: string) {
  this.getProjectByName(name).subscribe(existingProject => {
    if (existingProject) {
      // If the project exists, update the email field with the new value
      existingProject.email = email;

      // Send the updated project data to the server using HTTP PUT request
      const url = `${PolicyService.baseUrl}/policy/${existingProject.name}`;
      this.http.put<project>(url, existingProject).subscribe(updatedProject => {
        // Optionally, you can handle the response after the update is successful
        console.log('Project updated successfully:', updatedProject);
      });
    } else {
      // Handle the case when the project with the provided name doesn't exist
      console.log('Project not found:', name);
    }
  });
}














}

