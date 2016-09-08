import { Component } from '@angular/core';
import { NavigationComponent } from './navigation.component';

import { AppConfiguration } from './app.config';

@Component({
  selector: 'home-net-app',
  templateUrl: 'app.component.html',
  providers: [AppConfiguration]
})
export class AppComponent {
    constructor(private appConfig: AppConfiguration) {
    }
}