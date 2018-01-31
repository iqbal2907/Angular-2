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
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "This is heading 4";
        this.applyClass = true; // if this will be false no color will be applied.
        this.applyBlue = false; //make it true and applyBlue will become blue in color
    }
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: "my-tutorials",
            template: "<h2>{{title}}</h2>\n              <h3>This is heading 3</h3>\n              <div [class.myClass]=\"applyClass\">Apply Class</div>\n              <div [style.color]=\"applyBlue? 'blue' : 'orange'\">Apply Blue</div>",
            styles: ["\n  h3{\n      color:red;\n  }\n  .myClass{\n    color : Green;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map