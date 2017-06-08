import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private isOpacity = 1;

  constructor() { }

  ngOnInit() {
  }

  opacityToZero() {
    this.isOpacity = 0;
  }
  opacityToOne() {
    this.isOpacity = 1;
  }

}
