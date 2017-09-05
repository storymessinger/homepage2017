import { Injectable } from '@angular/core';

@Injectable()
export class BColorService {

  bColor:string;

  constructor() { }

  getColor(color) {
    this.bColor = color;
    console.log(this.bColor);
  }


}
