import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import * as _ from 'underscore';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public projects = [];

  private isOpacity:any;
  private id:number;
  // items: FirebaseListObservable<any[]>;
  items:any;

  constructor(db: AngularFireDatabase) { 
    // this.items= db.list('/projects');
    this.items= db.list('/projects', { preserveSnapshot: true });
    this.items
    .subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.projects.push(snapshot.val());
      });
      this.projects = this.dateSort_descend(this.projects);
    })
  }

  ngOnInit() {
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

  dateSort_descend(input) {
    let ascend = _.chain(input)
                .sortBy( item => item['month'])
                .sortBy( item => item['year'])
                .value();
    return ascend.reverse();
  }

}
