import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToItarable'
})
export class MapToItarablePipe implements PipeTransform {

  transform(dict: Object, putKey: boolean): Array<any> {
    const a = [];
    for (let key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push(
          putKey
          ? {key: key, val: dict[key]}
          : dict[key]
        );
      }
    }
    console.log(a);
    return a;
  }

}
