import { EyeBlinkService } from './../services/eye-blink.service';
import { Component, OnInit, Input } from '@angular/core';
declare var TweenLite, Power2:any;
declare var p5, TimelineMax, TweenMax, Power4;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() selectProject;
  click = false;;


  constructor(private eyeBlinkService:EyeBlinkService) { }


  ngOnInit() {
    let self = this;
    // this.canvasDrawing(this.selectProject);
    // TweenLite.ticker.addEventListener("tick",this.canvasDrawing);
    var sketch = function( p ) {

      let eye;

      p.setup = function() {
        let myCanvas = p.createCanvas(100,100);
        // myCanvas.background(200);
        myCanvas.parent('myContainer');
        eye = new Eye();

        randomBlink();
      };

      p.draw = function() {
        // console.log(self.click);
        eye.update(self.eyeBlinkService.blink);
        eye.render();
        self.eyeBlinkService.blink = false;
      };

      const randomBlink = function () {
        console.log('rnadom');
        if (Math.random() < 0.3) {
          self.eyeBlinkService.blink = true;
        }
        setTimeout(randomBlink, 5000);
      }


      class Eye {
        R = p.width ;
        R_black = 2*this.R * 1/2;
        R_red = 2*this.R * 3/8;

        black = p.color(0,0,0);
        // red = p.color(250, 48, 48);
        // darkred = p.color(168, 4, 4);
        grey = p.color(80, 80, 80);
        darkgrey = p.color(160, 160, 160);
        white = p.color(255,255,255);

        white_eye = { y: 0, eyebrow: 0 };
        former_count = 0;

        setEyebrows;

        blinked = true;
        
        constructor() {
          // p.fill(this.black);
          p.noStroke();
          // p.ellipse(this.R, this.R, this.R_black );
          this.setEyebrows = new TimelineMax({paused:true})
            .to( this.white_eye, 1.5, { y: this.R * (3/5), eyebrow: this.R*(1/15), ease: Power4.easeOut } )
            .to( this.white_eye, 2, { y: 0 , eyebrow: 0, ease: Power4.easeIn } );
          // this.setEyebrows.repeat(-1).yoyo(true).repeatDelay(8).play();
          this.setEyebrows.play();
        }


        blink(){
          this.setEyebrows.restart();
        }

        update(clicked) {
          if (clicked && this.blinked) {
            this.blink();
          }
        }

        render() {

          let R_white= this.white_eye.y;
          let R_eyebrow = this.white_eye.eyebrow;

          p.fill(this.grey);
          p.ellipse(this.R/2, this.R/2, this.R_red );

          p.fill(this.darkgrey);
          p.ellipse(this.R/2,this.R/2, this.R_red, R_white+R_eyebrow);
          p.fill(this.white);
          p.ellipse(this.R/2, this.R/2, this.R_red-2, R_white);
          p.fill(this.black);
          p.ellipse(this.R/2, this.R/2, this.R*(1/25), R_white);
        }
      }
    };
    let myp5 = new p5(sketch);
  }

  eyeBlink(){
    this.eyeBlinkService.blink = true;
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
      boxWidth = 2;
    }

    // get the iMax
    const xMax = Math.floor(context.canvas.width / 25);
    const yMax = Math.floor(context.canvas.height / 25);

    for(let j=0; j <= yMax; j++) {
      for(let i=0; i <= xMax; i++) {
        // let myArray = ["#FF836C", "#1D66FF","#A0B27D"];
        // let randomColor = myArray[Math.floor(Math.random() * myArray.length)];
        let randomColor = '#bbbbbb';
        // random? color
        context.fillStyle = randomColor;
        // dedicated position
        context.fillRect(25*i,25*j,boxWidth,boxWidth);
      }
    }


  }

}


class CanvasState {

}