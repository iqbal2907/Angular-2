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
//import { TutorialsComponent } from './concepts/Tutorial_6_Creating_your_first_component/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_7_Styling_Components/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial _10 _Event_Binding_and_References/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial _11 _Two_Way_Binding/tutorials.component';
//import { TutorialsComponent } from './concepts/Tutorial_12_Structural_Directives/tutorials.component';
var tutorials_component_1 = require('./concepts/Tutorial_13_Attribute_Directives/tutorials.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>First Angular 2 App</h1>\n              <my-tutorials></my-tutorials>",
            directives: [tutorials_component_1.TutorialsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map