import { Component } from '@angular/core';

@Component({
  selector: this.newFunction(),
  template: '<h2>Iqbals Tutorials Component</h2>'
})
export class TutorialsComponent { 
newFunction() {
        return 'my-tutorials';
    }
}
