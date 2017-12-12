import { Component } from '@angular/core';

@Component({
  selector: "my-tutorials",
  template: `<h2>{{title}}</h2>
              <h3>This is heading 3</h3>
              <div [class.myClass]="applyClass">Apply Class</div>
              <div [style.color]="applyBlue? 'blue' : 'orange'">Apply Blue</div>`,
  styles: [ `
  h3{
      color:red;
  }
  .myClass{
    color : Green;
  }
  `]
})
export class TutorialsComponent { 
  public title = "This is heading 4";
  public applyClass = true; // if this will be false no color will be applied.
  public applyBlue = false; //make it true and applyBlue will become blue in color
  
}
