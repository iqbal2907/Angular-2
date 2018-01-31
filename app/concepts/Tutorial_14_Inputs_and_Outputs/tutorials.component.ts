import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: "my-tutorials",
  template: `<h2>Child Tutorial Component</h2>
              <label>Enter Child TutorialsComponent value</label>
              <input type="text" #childtext (keyup)="onChange(childtext.value)">
              <p>Value from parent AppComponent is : 
              {{parentData}}`,
  inputs: [`parentData`],
  outputs:[`childEvent`]
})
export class TutorialsComponent { 

    public parentData: string;
    childEvent = new EventEmitter<string>();
    onChange(value:string){
        this.childEvent.emit(value);
    }
} 

