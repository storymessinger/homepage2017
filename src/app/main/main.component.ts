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
          color: "rgba(52,52,52,0.9)"
         },
        { projectId: 1,
          img: "./../../assets/Projects/2014_Primrose/img/pic02-small.jpg", 
          color: "rgba(52,52,52,0.9)"
         },
        { projectId: 1,
          img: "./../../assets/Projects/2014_Primrose/img/pic03-small.jpg", 
          color: "rgba(52,52,52,0.9)"
         },
        { projectId: 1,
          img: "./../../assets/Projects/2014_Primrose/img/pic04-small.jpg", 
          color: "rgba(52,52,52,0.9)"
         }
      ]
    },
    {
      name: "SoundCloud Redesign Project",
      year: 2014,
      id: 2,
      list: [
        { projectId: 2,
          img: "./../../assets/Projects/2014_SoundCloudProject/img/pic01-small.jpg", 
          color: "#f36d43"
         },
        { projectId: 2,
          img: "./../../assets/Projects/2014_SoundCloudProject/img/pic02-small.jpg", 
          color: "#f36d43"
         },
        { projectId: 2,
          img: "./../../assets/Projects/2014_SoundCloudProject/img/pic03-small.jpg", 
          color: "#f36d43"
         },
        { projectId: 2,
          img: "./../../assets/Projects/2014_SoundCloudProject/img/pic04-small.jpg", 
          color: "#f36d43"
         }
      ]
    },
    {
      name: "CatShelter Concept",
      year: 2015,
      id: 3,
      list: [
        { projectId: 3,
          img: "./../../assets/Projects/2015_CatShelter/img/pic01-small.jpg", 
          color: "#e0deeb"
         },
        { projectId: 3,
          img: "./../../assets/Projects/2015_CatShelter/img/pic02-small.jpg", 
          color: "#e0deeb"
         },
        { projectId: 3,
          img: "./../../assets/Projects/2015_CatShelter/img/pic03-small.jpg", 
          color: "#e0deeb"
         },
      ]
    },
    {
      name: "BanBan App Project (Naver UXDP)",
      year: 2015,
      id: 4,
      list: [
        { projectId: 4,
          img: "./../../assets/Projects/2015_Banban/img/pic01-small.jpg", 
          color: "#e54038"
         },
        { projectId: 4,
          img: "./../../assets/Projects/2015_Banban/img/pic02-small.jpg", 
          color: "#e54038"
         },
        { projectId: 4,
          img: "./../../assets/Projects/2015_Banban/img/pic03-small.jpg", 
          color: "#e54038"
         },
        { projectId: 4,
          img: "./../../assets/Projects/2015_Banban/img/pic04-small.jpg", 
          color: "#e54038"
         },
      ]
    },
    {
      name: "Consumer to Creator(CHI 16', 3rd author)",
      year: 2016,
      id: 5,
      list: [
        { projectId: 5,
          img: "./../../assets/Projects/2016_ConsumerToCreator/img/pic01-small.jpg", 
          color: "rgba(255,255,255,0.8)"
         },
        { projectId: 5,
          img: "./../../assets/Projects/2016_ConsumerToCreator/img/pic02-small.jpg", 
          color: "rgba(255,255,255,0.8)"
         },
        { projectId: 5,
          img: "./../../assets/Projects/2016_ConsumerToCreator/img/pic03-small.jpg", 
          color: "rgba(255,255,255,0.8)"
         },
      ]
    },
    {
      name: "First Snow Art Project",
      year: 2016,
      id: 6,
      list: [
        { projectId: 6,
          img: "./../../assets/Projects/2014_FirstSnow/img/pic01-small.jpg", 
          color: "#8293e6"
         },
        { projectId: 6,
          img: "./../../assets/Projects/2014_FirstSnow/img/pic02-small.jpg", 
          color: "#8293e6"
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
