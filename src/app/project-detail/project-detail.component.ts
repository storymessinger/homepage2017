import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ProjectsService } from '../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/model/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  private project:Project;
  id:number;

  constructor(private projectsService:ProjectsService ) { 
  } 

  ngOnInit() {
    this.projectsService.findProjectById(10).subscribe(
      (result) => {this.project = result[0]}
    )
  }

}
