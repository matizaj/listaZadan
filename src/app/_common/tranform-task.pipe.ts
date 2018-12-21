import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tranformTask'
})
export class TranformTaskPipe implements PipeTransform {

  transform(value: string, args: string = ''): any {
    return value.charAt(0).toUpperCase() + value.slice(1) + args;
  }

}
