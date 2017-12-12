import { Component } from '@angular/core';

@Component({
  selector: "my-tutorials",
  template: `<h2>{{title}}</h2>
              Enter First Name : <input type="text" [(ngModel)]="firstName"><br><br>
              Enter Last Name : <input type="text" [(ngModel)]="lastName"><br><br>
              Full Name : {{firstName}} {{lastName}}`
})
export class TutorialsComponent { 
  public title = "Tutorial - 11 - Two Way Binding";
  public firstName;
  public lastName;
  
}

