import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: Date, ...args: number[]): unknown {

    // TODO 1
    if (args != null) {
      switch (args[0]) {
        case 1: return formatDate(new Date(), 'ddMMyyyy', 'en');
        case 2: return formatDate(new Date(), 'dd / MM / yyyy', 'en');
        case 3: return formatDate(new Date(), 'dd/MM/yyyy', 'en');
        case 4: return formatDate(new Date(), 'yyyy-MM-dd', 'en');
      }
    }
    return null;
  }
}


// this.birth_date.setValue(formatDate(new Date(), 'yyyy-MM-dd', 'en'));