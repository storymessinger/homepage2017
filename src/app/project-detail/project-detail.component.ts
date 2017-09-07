import { BColorService } from '../services/b-color.service';
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

  descBox:Boolean = true;

  constructor(private route:ActivatedRoute, private bColorService:BColorService, private projectsService:ProjectsService ) { 
  } 

  ngOnInit() {

    this.route.params
      .switchMap(param => this.projectsService.findProjectById(parseInt(param['id']))
      )
      .subscribe(
        (result) => {
          this.project = result[0];
          this.bColorService.getColor(this.project.list[0]['color']);
        }
      )
  }

  toggleDesc() {
    if(this.descBox == true) {
      this.descBox = false;
    } else {
      this.descBox = true;
    }
  }

}
