import { Project } from '../shared/model/project';
import { ProjectsService } from '../services/projects.service';
import { BColorService } from './../services/b-color.service';
import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
