import { Component } from '@angular/core';
//import { TutorialsComponent } from './concepts/Tutorial_6_Creating_your_first_component/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_7_Styling_Components/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_10 _Event_Binding_and_References/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_11 _Two_Way_Binding/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_12_Structural_Directives/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_13_Attribute_Directives/tutorials.component';
import { TutorialsComponent } from './concepts/Tutorial_14_Inputs_and_Outputs/tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>First Angular 2 App</h1>
              <h2>Parent App Component</h2>
              <label>Enter Parent AppComponent value</label>
              <input type="text" #ptext (keyup)="0">
              <p>Value from child TutorialsComponent is : 
              {{childData}}
              <my-tutorials (childEvent)="childData=$event"[parentData]="ptext.value"></my-tutorials>`,
  directives: [TutorialsComponent]
})
export class AppComponent { 
  public childData: string;
}







