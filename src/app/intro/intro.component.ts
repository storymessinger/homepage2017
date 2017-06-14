import { Component, OnInit } from '@angular/core';

declare var p5, TweenMax, Power3;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var sketch = function( p ) {

      let sine = { x: 10 };
      let myTween = TweenMax.to( sine, 1.5, { x: 140, ease: Power3.easeOut } );
      myTween.repeat(-1).yoyo(true).play();


      let eye;

      p.setup = function() {
        let myCanvas = p.createCanvas(500, 500);
        myCanvas.background(200);
        myCanvas.parent('myContainer');
        eye = new Eye();

      };

      p.draw = function() {
        eye.update();
        eye.render(sine.x);
      };

      function Eye() {

        const R = p.width / 2;
        const R_black = 2*R * 1/2;
        const R_red = 2*R * 3/8;

        let black = p.color(0,0,0);
        let red = p.color(250, 48, 48);
        let darkred = p.color(168, 4, 4);
        let white = p.color(255,255,255);
        // this.pos = p.createVector(p.width / 2, p.height / 2);
        // this.vel = p.createVector(0, 0);
        
          p.fill(black);
          p.noStroke();
          this.circle__outer = p.ellipse(R, R, R_black );

        this.update = function() {
          // if (p.frameCount % 3 == 1) {
          //   this.acc = p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0.1));
          // } else {
          //   // Follow mouse code
          //   let target = p.createVector( p.width / 2, p.height / 2);
          //   this.acc = p5.Vector.sub(target, this.pos);
          //   this.acc.normalize();
          //   this.acc.mult(0.05);
          // }
          // this.vel.add(this.acc);
          // this.pos.add(this.vel);

        }

        this.render = function(t) {
          p.fill(red);
          this.circle__inner = p.ellipse(R, R, R_red );

          // let R_white= R_red-100;
          let R_white= t;
          p.fill(darkred);
          p.ellipse(R,R, R_red, R_white+15);
          p.fill(white);
          p.ellipse(R, R, R_red, R_white);
          p.fill(black);
          p.ellipse(R, R, 10, R_white);

          // p.noStroke();
          // p.fill(255, 20);
          // // Size is inversely proportional to distance to center of canvas 
          // this.size = p.map(p.sqrt(p5.Vector.sub(p.createVector(p.width/2,p.height/2), this.pos).magSq()), 0, p.width/2, 2, 8);
          // //print(this.size);
          // p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
        }
      }
    };

    let myp5 = new p5(sketch);
    
  }

}
