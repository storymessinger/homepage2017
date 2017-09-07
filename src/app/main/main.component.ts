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

      p.setup = function() {
        let myCanvas = p.createCanvas(p.windowWidth, p.windowHeight);
        myCanvas.parent('background');
        myCanvas.elt.style.position = "fixed"; // position the canvas to fixed     };
      }

      p.draw = function() {
        // p.background(255,204,0);
      };
      
      p.windowResized = function(){
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

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
