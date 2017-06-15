import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio = [
    {
          "name": "VML Website",
          "fullname": "Visual Media Lab Website",
          "year": 2017,
          "month":4,
          "id": 11,
          "list": [
            { "projectId": 11,
                "smallimg": "./../../assets/Projects/2015_CatShelter/img/pic01-small.jpg", 
                "bigimg": "./../../assets/Projects/2015_CatShelter/img/pic01-big.jpg", 
                "color": "rgba(255,115,69,1)"
              },
          ]
      },

      {
          "name": "First Snow",
          "fullname": "First Snow Art Project",
          "year": 2014,
          "month":12,
          "id": 3,
          "list": [
          { "projectId": 3,
              "smallimg": "./../../assets/Projects/2014_FirstSnow/img/pic01-small.jpg", 
              "bigimg": "./../../assets/Projects/2014_FirstSnow/img/pic01-big.jpg", 
              "color": "rgba(215, 215, 215, 0.81)"
              },
          { "projectId": 3,
              "smallimg": "./../../assets/Projects/2014_FirstSnow/img/pic02-small.jpg", 
              "bigimg": "./../../assets/Projects/2014_FirstSnow/img/pic02-big.jpg", 
              "color": "rgba(215, 215, 215, 0.81)"
              }
          ]
      }
 
    ]

  constructor(db: AngularFireDatabase) { }

  ngOnInit() {
  }

}
