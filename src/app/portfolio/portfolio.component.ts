import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

declare var ScrollMagic, TweenMax;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

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
      },

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
      }
 
  ]


  screen_controller;

  constructor(db: AngularFireDatabase) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.setScreenChange(4);
  }

  setScreenChange(j) {

    for (let i=0; i < j; i++){

      let _start = '#test' + i
      let _end = '#test'+ (i+1);

      this.screen_controller = new ScrollMagic.Controller();

      const nav_scene = new ScrollMagic.Scene({
        triggerElement: _start, 
        offset:200,
        triggerHook:"onLeave" 
      })
        .on("progress", function(event){
          if(event.scrollDirection == "FORWARD"){
            TweenMax.to(window, 0.5, {scrollTo: {y:_end , autoKill: false}});
          }
          console.log('hi');
          console.log(nav_scene.triggerPosition());
        })

      this.screen_controller.addScene([
        nav_scene
      ]);

    }
  }

}
