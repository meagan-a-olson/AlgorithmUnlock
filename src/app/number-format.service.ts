import { Injectable } from '@angular/core';
import * as numeral from 'numeral';

@Injectable({
  providedIn: 'root'
})
export class NumberFormatService {

  constructor() { }

  formatNumber(num: number, showDecimals: boolean = false) {
    let flag : boolean = num >= 1000 ? true : false;
    let fnum : string = (flag || showDecimals) ? numeral(num).format('0[.][000] a') : numeral(num).format('0 a');
    let last : string = fnum.slice(fnum.length - 1);
    if (flag) {
      switch (last) {
        case 'k': {
          fnum = fnum.replace("k", "thousand");
          break;
        }
        case 'm': { }
        case 'b': {
          fnum += 'illion';
          break;
        }
        case 't': {
          if (num < 1000000000000000) {
            fnum = fnum.replace("t", "trillion");
          } else {
            fnum = fnum.replace("t", "quadrillion+");
          }
        }
      }
    }
    return fnum;
  }
}
