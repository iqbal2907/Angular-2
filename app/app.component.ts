import { Component } from '@angular/core';
//import { TutorialsComponent } from './concepts/Tutorial_6_Creating_your_first_component/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_7_Styling_Components/tutorials.component';
import { TutorialsComponent } from './concepts/Tutorial _10 _Event_Binding_and_References/tutorials.component';



@Component({
  selector: 'my-app',
  template: `<h1>First Angular 2 App</h1>
              <my-tutorials></my-tutorials>`,
  directives: [TutorialsComponent]
})
export class AppComponent { }
