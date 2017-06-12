import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-journal-post',
  templateUrl: './journal-post.component.html',
  styleUrls: ['./journal-post.component.scss']
})
export class JournalPostComponent implements OnInit {


  subscription: Subscription;
  id: number;
  post:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    db: AngularFireDatabase
    ) { 
    this.subscription = activatedRoute.params //
    .subscribe(
      (param:any) => {
      this.id = parseInt(param['id']);
    })

    this.post = db.list('/journals')
      .map(items => items.filter(item => {
        return item.id == this.id
      })
    );
  }


  ngOnInit() {
  }

}
