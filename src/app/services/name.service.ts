import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

 private enteredName: string = '';
  constructor() { }

  
  setEnteredName(name: string) {
    this.enteredName = name;
  }

  getEnteredName(): string {
    return this.enteredName;
  }
}
