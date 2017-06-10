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

  public projects = [
    {
      name: "Primrose",
      year: 2014,
      id: 1,
      list: [
        { projectId: 1,
          img: "./../../assets/Projects/2014_Primrose/img/pic01-small.jpg", 
          color: "#f2a05d"
         },
        { projectId: 1,
          img: "./../../assets/Projects/2014_Primrose/img/pic02-small.jpg", 
          color: "#f2a05d"
         },
        { projectId: 1,
          img: "./../../assets/Projects/2014_Primrose/img/pic03-small.jpg", 
          color: "#f2a05d"
         },
        { projectId: 1,
          img: "./../../assets/Projects/2014_Primrose/img/pic04-small.jpg", 
          color: "#f2a05d"
         }
      ]
    },
    {
      name: "Jundong Hello",
      year: 2014,
      id: 2,
      list: [
        { projectId: 2,
          img: "./../../assets/Projects/2014_SoundCloudProject/img/pic01-small.jpg", 
          color: "#1D66FF"
         },
        { projectId: 2,
          img: "./../../assets/Projects/2014_SoundCloudProject/img/pic02-small.jpg", 
          color: "#1D66FF"
         },
        { projectId: 2,
          img: "./../../assets/Projects/2014_SoundCloudProject/img/pic03-small.jpg", 
          color: "#1D66FF"
         }
      ]
    },
    {
      name: "Munggoon Hello",
      year: 2014,
      id: 3,
      list: [
        { projectId: 3,
          img: "./../../assets/test.jpg",
          color: "#A0B27D"
         },
        { projectId: 3,
          img: "./../../assets/test.jpg",
          color: "#A0B27D"
         },
        { projectId: 3,
          img: "./../../assets/test.jpg",
          color: "#A0B27D"
         },
        { projectId: 3,
          img: "./../../assets/test.jpg",
          color: "#A0B27D"
         },
      ]
    },
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
