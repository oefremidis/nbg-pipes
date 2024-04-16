import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuiltInComponent } from './built-in/built-in.component';
import { DoNothingPipe } from './custom/do-nothing.pipe';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuiltInComponent, JsonPipe, DoNothingPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nbg-pipes';
}
