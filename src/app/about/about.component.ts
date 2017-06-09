import { Component, OnInit } from '@angular/core';

import 'gsap';
declare var TweenLite, Power2:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    TweenLite.to('.introTitle', 1.4, {opacity: 1, ease: Power2.easeIn});
  }

}
