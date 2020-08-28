import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {
  constructor() {
    console.log('create money pipe');
  }
  transform(value: any, ...args: any[]): any {
    return 111;
  }

}
