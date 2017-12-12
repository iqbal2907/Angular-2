import { Component } from '@angular/core';

@Component({
  selector: "my-tutorials",
  template: `<h2>{{title}}</h2>
              <p *ngIf="showElement">Show Element<p>
              <div [ngSwitch]="color">
                <p *ngSwitchWhen="'red'">Red color is shown</p>
                <p *ngSwitchWhen="'blue'">Blue color is shown</p>
                <p *ngSwitchDefault>Invalid color</p>
              </div>
              <ul>
                <li *ngFor="let color of colors">{{color}}</li>
              </ul>
            `
})
export class TutorialsComponent { 
  public title = "Tutorial - 12 - Structural Directives";
  public showElement=true;
  public color='blue';
  public colors = ['red','blue','green']
  
}

