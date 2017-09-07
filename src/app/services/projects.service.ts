import { Project } from '../shared/model/project';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectsService {

  constructor(private db: AngularFireDatabase) { }

  findAllProjects(): Observable<Project[]>{
    return this.db.list('projects')
      .map(item => item.sort((a,b) => b['year'] - a['year'] || b['month'] - a['month']))
      .first()
      .do(console.log);
  }

  findProjectById(id:number): Observable<Project[]> {

    return this.db.list('projects', {
      query: {
        orderByChild: 'id',
        equalTo: id 
      }
    })
      .first()
      .do(console.log)

  }

}
