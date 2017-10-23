import { BColorService } from '../services/b-color.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import 'gsap';
declare var TweenLite, TweenMax, Power2, Linear, TimelineMax, ScrollMagic:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private bColorService:BColorService, private router:Router) { }

  ngOnInit() {
    this.bColorService.getColor('#dddddd');
    TweenLite.to('.intro', 1.4, {opacity: 1, ease: Power2.easeIn});
    this.parallax__myDesignLab();
    this.parallax__idKAIST();

    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  parallax__myDesignLab() {
    const controller = new ScrollMagic.Controller();
    const tween = new TimelineMax()
      .add([
        TweenMax.fromTo("#parallaxContainer .parallax01", 1, 
          {top:500, ease: Linear.easeNone},
          {top:200, ease: Linear.easeNone}),
      ]);

    const scene = new ScrollMagic.Scene({
      triggerElement: "#parallaxContainer",
      duration: 1000,
      offset: 400,  // 800/2
    })
      .setTween(tween)
      .setPin("#parallaxContainer")
      .addTo(controller);
  }

 parallax__idKAIST() {
    const controller = new ScrollMagic.Controller();
    const tween = new TimelineMax()
      .add([
        TweenMax.fromTo("#parallaxContainer__idKAIST .parallax02", 1, 
          {top:500, ease: Linear.easeNone},
          {top:0, ease: Linear.easeNone}),
      ]);

    const scene = new ScrollMagic.Scene({
      triggerElement: "#parallaxContainer__idKAIST",
      duration: 1000,
      offset: 400,  // 800/2
    })
      .setTween(tween)
      .setPin("#parallaxContainer__idKAIST")
      .addTo(controller);
  }

}
