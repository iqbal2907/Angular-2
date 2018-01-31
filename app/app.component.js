"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { TutorialsComponent } from './concepts/Tutorial_06_Creating_your_first_component/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_07_Styling_Components/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_10_Event_Binding_and_References/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_11_Two_Way_Binding/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_12_Structural_Directives/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_13_Attribute_Directives/tutorials.component';
var tutorials_component_1 = require('./concepts/Tutorial_14_Inputs_and_Outputs/tutorials.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>First Angular 2 App</h1>\n              <h2>Parent App Component</h2>\n              <label>Enter Parent AppComponent value</label>\n              <input type=\"text\" #ptext (keyup)=\"0\">\n              <p>Value from child TutorialsComponent is : \n              {{childData}}\n              <my-tutorials (childEvent)=\"childData=$event\"[parentData]=\"ptext.value\"></my-tutorials>",
            directives: [tutorials_component_1.TutorialsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
//use below code for app.component.ts for all tutorial component on and before 13
@Component({
  selector: 'my-app',
  template: `<h1>First Angular 2 App</h1>
              <my-tutorials></my-tutorials>`,
  directives: [TutorialsComponent]
})
export class AppComponent { }


*/
//# sourceMappingURL=app.component.js.map