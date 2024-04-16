import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-built-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in.component.html',
  styleUrl: './built-in.component.css'
})
export class BuiltInComponent implements OnInit{

  aDate: Date = new Date();

  jsonObject: Object = {
    brand: 'audi',
    year: 2012,
    color: {
      main: 'red',
      secondary: 'blue'
    }
  };

  // jsonObject$: any = of(this.jsonObject);

  jsonObject$: any;

  ngOnInit(): void {
    this.jsonObject$ = of(this.jsonObject)
  }

}
