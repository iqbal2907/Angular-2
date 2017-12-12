import { Component } from '@angular/core';

@Component({
  selector: "my-tutorials",
  template: `<h2>{{title}}</h2>
              <button (click) = "onClick(demoInput.value)">Click me</button>
              <input type="text" #demoInput> 
              `
})
export class TutorialsComponent { 
  public title = "Angular 2 Tutorial - 10 - Event Binding and References"
  onclick(value){
    console.log(value);
  }
}
