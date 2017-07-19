import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
    appTitle: string = 'Welcome';
    appStatus: boolean = true;
}
