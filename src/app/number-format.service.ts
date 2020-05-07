import { Injectable } from '@angular/core';
import * as numeral from 'numeral';

@Injectable({
  providedIn: 'root'
})
export class NumberFormatService {

  THOUSAND = 1000;
  QUADRILLION = 1000000000000000;
  QUINTILLION = 1000000000000000000;
  SEXTILLION = 1000000000000000000000;
  SEPTILLION = 1000000000000000000000000;
  OCTILLION = 1000000000000000000000000000;
  NONILLION = 1000000000000000000000000000000;
  DECILLION = 1000000000000000000000000000000000;
  UNDECILLION = 1000000000000000000000000000000000000;
  DUODECILLION = 1000000000000000000000000000000000000000;
  largeNumStr : string = '0[.][000]';

  constructor() { }

  private largeNumFormat(num: number) {
    return numeral(num).format(this.largeNumStr);
  }

  formatNumber(num: number, showDecimals: boolean = false) {
    let flag : boolean = num >= this.THOUSAND ? true : false;
    let fnum : string = (flag || showDecimals) ? numeral(num).format(this.largeNumStr + ' a') : numeral(num).format('0 a');
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
          fnum = fnum.slice(0, fnum.length - 1);
          if (num < this.QUADRILLION) {
            fnum  += "trillion";
          } else  {
            num = (num / this.QUADRILLION);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' quadrillion';
            }
            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' quintillion';
            }
            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' sextillion';
            }

            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' septillion';
            }

            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' octillion';
            }

            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' nonillion';
            }

            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' decillion';
            }

            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' undecillion';
            }

            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' duodecillion';
            }

            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' tredecillion';
            }

            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' quattuordecillion';
            }

            num = (num / this.THOUSAND);
            if (num < this.THOUSAND) {
              fnum = this.largeNumFormat(num);
              return fnum += ' quindecillion';
            }
          }
        }
      }
    }
    return fnum;
  }
}
