import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withParams',
  standalone: true
})
export class WithParamsPipe implements PipeTransform {

  transform(value: string, prefix: string, postfix:string): string {
    return `${prefix} ${value} ${postfix}!`
  }

}
