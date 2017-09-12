import { Project } from '../shared/model/project';
import { ProjectsService } from '../services/projects.service';
import { BColorService } from './../services/b-color.service';
import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var TweenLite, Power2:any;
declare var p5, TimelineMax, TweenMax, Power4;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  private isOpacity:any;
  private id:number;
  projects$:Observable<Project[]>;


  constructor(private bColorService:BColorService, private projectService:ProjectsService) { 
  }

  ngOnInit() {
    this.bColorService.getColor('#dddddd');
    this.projects$ = this.projectService.findAllProjects();

    this.backgroundCanvas();
  }

  backgroundCanvas() {
    let self = this;


    var sketch = function ( p ) {

      let boxes;
      let time = { t : 0 };
      TweenLite.to(time, 3, {t:1, ease: Power2.easeInOut})

      p.setup = function() {
        let myCanvas = p.createCanvas(p.windowWidth, p.windowHeight);
        myCanvas.parent('background');
        myCanvas.elt.style.position = "fixed"; // position the canvas to fixed     };

        boxes = new Boxes(p.windowWidth, p.windowHeight, time);
      }

      p.draw = function() {
        // p.background(255,204,0);
        boxes.render();
      };
      
      p.windowResized = function(){
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      class Boxes {

        center_xy = 80;
        w = 20;
        x_num;
        y_num;
        time;

        constructor(windowWidth:number, windowHeight:number, Time) {
          p.noFill();
          this.x_num = windowWidth / this.center_xy;
          this.y_num = windowHeight / this.center_xy;
          this.time = Time;
        } 

        render() {

          let c = this.center_xy;
          let w = this.w;

          for (let x=0; x < this.x_num; x++) {
            for (let y=0; y < this.y_num; y++ ) {
              p.stroke(p.color(180,180,180));

              this.line_1(c*x,c*y);

              // top
              // p.quad(c*x + 17, c*y - 10,
              //        c*x,c*y - 20,
              //        c*x - 17, c*y - 10,
              //        c*x,      c*y);
            }
          }

        }

        line_1(x,y) {
          let t = this.time.t;
          p.line(x,y,
                 x+17*t, y-10*t)
          // p.line(x + 17, y - 10, 
          //        x + 17 - 17*t, y - 10 - 10*t);
        }

      }


    }

    let myp5 = new p5(sketch);
  }

  sendColor(color){
    this.bColorService.getColor(color);
  }

  opacityToZero(event) {
    this.isOpacity = false;
    this.id = event.target.id;
  }
  opacityToOne() {
    this.isOpacity = true;
  }

  opacityTo() {
    return this.id;
  }

}
