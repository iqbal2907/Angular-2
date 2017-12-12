import { Component } from '@angular/core';

@Component({
  selector: "my-tutorials",
  template: `<h2>{{title}}</h2>
              <button (click) = "onClick(demoInput.value)">Click me</button>
              <input type="text" #demoInput>`
})
export class TutorialsComponent { 
  public title = "Angular 2 Tutorial - 10 - Event Binding and References"
  onClick(value){
    console.log(value);
  }
}

//Note : we can use button(mouseover) instead of button (click) in order to fire event on mouse over.
// also to catch whole event we can use onClick($event) instead of onClick(demoInput.value)