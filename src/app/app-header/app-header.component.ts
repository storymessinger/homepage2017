import { Component, OnInit, Input } from '@angular/core';
import 'gsap';
declare var TweenLite, Power2:any;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() selectProject;

  constructor() { }

  ngOnInit() {
    // this.canvasDrawing(this.selectProject);
    TweenLite.ticker.addEventListener("tick",this.canvasDrawing);
  }


  canvasDrawing() {

    let canvas:any = document.getElementById("canv");
    let context:CanvasRenderingContext2D = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    let boxWidth = 0;
    if (this.selectProject== true) {
      boxWidth = 2;
    } else {
      boxWidth = 3;
    }

    console.log(boxWidth);
    // get the iMax
    const xMax = Math.floor(context.canvas.width / 50);
    const yMax = Math.floor(context.canvas.height / 50);

    for(let j=0; j <= yMax; j++) {
      for(let i=0; i <= xMax; i++) {
        // let myArray = ["#FF836C", "#1D66FF","#A0B27D"];
        // let randomColor = myArray[Math.floor(Math.random() * myArray.length)];
        let randomColor = '#bbbbbb';
        // random? color
        context.fillStyle = randomColor;
        // dedicated position
        context.fillRect(50*i,50*j,boxWidth,boxWidth);
      }
    }


  }

}


class CanvasState {

}