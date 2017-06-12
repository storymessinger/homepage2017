import { Component, OnInit } from '@angular/core';

declare var p5;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var sketch = function( p ) {

      let walker;

      p.setup = function() {
        p.createCanvas(1024, 1024);
        p.background(35);
        walker = new Walker();
      };

      p.draw = function() {
        walker.update();
        walker.render();
      };

      function Walker() {
        // this.pos = p.createVector(p.width / 2, p.height / 2);
        // this.vel = p.createVector(0, 0);

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

        this.render = function() {
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
