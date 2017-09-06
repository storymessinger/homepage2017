import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

export const BCOLOR = "#dddddd";

@Injectable()
export class BColorService {

  // bColor:string;

  private subject = new BehaviorSubject(BCOLOR);

  color$: Observable<string> = this.subject.asObservable();

  constructor() { }

  // getColor(color) {
  //   this.bColor = color;
  //   console.log(this.bColor);
  // }

  getColor(color) {
    this.subject.next(color);
  }


}
