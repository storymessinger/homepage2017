import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private test = [
    { projectId: 0 },
    { projectId: 0 }
  ]


  private isOpacity:any;
  private id:number;
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) { 
    this.items = db.list('/items');
  }

  ngOnInit() {
  }

  opacityToZero(event) {
    this.isOpacity = false;
    this.id = event.target.id;
    console.log(this.id);
  }
  opacityToOne() {
    this.isOpacity = true;
  }

  opacityTo() {
    return this.id;
  }

}
