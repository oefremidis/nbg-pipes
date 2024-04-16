import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doNothing',
  standalone: true
})
export class DoNothingPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  // transform(): unknown {
  transform(value: unknown): unknown {
    return `Do nothing - Just for demonstration - value ${value}`;
  }

}
