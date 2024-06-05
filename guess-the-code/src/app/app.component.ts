import { Component } from '@angular/core';
import { DisplayComponent } from './display/display.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DisplayComponent]
})
export class AppComponent {}
