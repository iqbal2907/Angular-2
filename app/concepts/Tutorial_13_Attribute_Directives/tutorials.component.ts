import { Component } from '@angular/core';

@Component({
  selector: "my-tutorials",
  template: `<h2>{{title}}</h2>
              <p [ngClass]="{classOne:class1, classTwo:class2}">ngClass paragraph</p>
              <button (click)="toggle()">Toggle</button>
              `,
  styles: [`.classOne{color:white}
            .classTwo{background-color:black}`]
})
export class TutorialsComponent { 
  public title = "Tutorial - 13 - Attribute Directives";
  public class1=true;
  public class2=true;
  toggle(){
    this.class1=!this.class1;  
    this.class2=!this.class2;  
  }  
}

