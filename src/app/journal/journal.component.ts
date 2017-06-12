import { Component, OnInit, DoCheck, AfterViewChecked} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

declare var TweenMax, Power2, ScrollMagic;

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit, AfterViewChecked {

  public journals;

  test = [
             {
            "id" : 1,
            "date": "20150607",
            "title" : "This is Title",
            "subtitle":"this is sub",
            "tag" : ["design", "app", "jiyoun"],
            "body" : "<p>fdsd<br>dfadsfsfkjfsi<br>dfasdfdsfadsf<br>sdf<br>sdf<br>asdfsdf </p><p>this is tseting</p>",
            "mainimg" : "./../../assets/test02.jpg",
            "img" : [
                "",
                ""
            ]
        },
             {
            "id" : 2,
            "date": "20160117",
            "title" : "This is Second Title",
            "subtitle":"this is sub",
            "tag" : ["design", "jiyoun", "KAIST"],
            "body" : "<p>fdsd<br>dfadsfsfkjfsi<br>dfasdfdsfadsf<br>sdf<br>sdf<br>asdfsdf </p><p>this is tseting</p>",
            "mainimg" : "./../../assets/test02.jpg",
            "img" : [
                "",
                ""
            ]
        },
             {
            "id" : 3,
            "date": "20150607",
            "title" : "This is Title",
            "subtitle":"this is sub",
            "tag" : ["design", "app", "jiyoun"],
            "body" : "<p>fdsd<br>dfadsfsfkjfsi<br>dfasdfdsfadsf<br>sdf<br>sdf<br>asdfsdf </p><p>this is tseting</p>",
            "mainimg" : "./../../assets/test02.jpg",
            "img" : [
                "",
                ""
            ]
        },
             {
            "id" : 4,
            "date": "20160117",
            "title" : "This is Second Title",
            "subtitle":"this is sub",
            "tag" : ["design", "jiyoun", "KAIST"],
            "body" : "<p>fdsd<br>dfadsfsfkjfsi<br>dfasdfdsfadsf<br>sdf<br>sdf<br>asdfsdf </p><p>this is tseting</p>",
            "mainimg" : "./../../assets/test02.jpg",
            "img" : [
                "",
                ""
            ]
        }

  ]

  constructor(db: AngularFireDatabase) { 
    this.journals = db.list('/journals')
      .map(item => item.sort((a,b) => b['date'] - a['date']));
      // .subscribe( (item) => console.log(item), 
      //             (err) =>  console.log(err),
      //             () => console.log('Complete')
      // )
  }

  ngOnInit() {

  }


  ngAfterViewChecked(){
    // TweenMax.staggerFrom(".list li", 1, {
    // cycle:{
      //an array of values
      // color:["#00B388", "rgb(243, 109, 67)"],
      //function that returns a value
      // y:function(index){
      //   return index * 20;
      // }, 
      // }, opacity: 1
    // }, 0.3);
  }

}
