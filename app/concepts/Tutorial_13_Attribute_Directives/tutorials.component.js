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
        this.title = "Tutorial - 13 - Attribute Directives";
        this.class1 = true;
        this.class2 = true;
        this.style = 'italic';
        this.size = '50px';
    }
    TutorialsComponent.prototype.toggle = function () {
        this.class1 = !this.class1;
        this.class2 = !this.class2;
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: "my-tutorials",
            template: "<h2>{{title}}</h2>\n              <p [ngClass]=\"{classOne:class1, classTwo:class2}\">ngClass paragraph</p>\n              <button (click)=\"toggle()\">Toggle</button>\n              <p [ngStyle]=\"{'font-style':style, 'font-size':size}\">ngStyle Paragraph</p>\n              ",
            styles: [".classOne{color:white}\n            .classTwo{background-color:black}"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map