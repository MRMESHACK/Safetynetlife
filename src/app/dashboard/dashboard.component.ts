 import { Component, OnInit } from '@angular/core';
 import { project, PolicyEntry } from '../form.model';
 import { PolicyService } from '../services/policy.service';
 import { NameService } from '../services/name.service';

 @Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.css']
 })
 export class DashboardComponent implements OnInit {

   filteredProject: project | null = null;
   allProjects: project[] = [];

   constructor(private service: PolicyService, private nameService: NameService) { }

  
   ngOnInit(): void {
     const nameFromForm = this.nameService.getEnteredName();
      this.service.list().subscribe(data => {
        this.allProjects = data;
        this.filteredProject = this.getProjectByName(nameFromForm);
      });
   }


   getProjectByName(name: string): project | null {
     return this.allProjects.find(project => project.name === name) || null;
   }
 }


