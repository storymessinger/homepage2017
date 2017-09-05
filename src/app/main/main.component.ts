import { BColorService } from './../services/b-color.service';
import { Component, OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  private isOpacity:any;
  private id:number;
  projects:any;

  constructor(db: AngularFireDatabase, private bColorService:BColorService) { 
    this.projects = db.list('/projects')
      .map(item => item.sort((a,b) => b['year'] - a['year'] || b['month'] - a['month']));

  }

  ngOnInit() {
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
