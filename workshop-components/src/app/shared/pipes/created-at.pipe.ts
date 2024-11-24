import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'createdAt'
})
export class CreatedAtPipe implements PipeTransform {

  transform(date: string): string {
    return moment(date).format('YYYY-MM-DD hh:mm:ss');
  }
}
