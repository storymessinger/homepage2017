import { Component, OnInit } from '@angular/core';

import 'gsap';
declare var TweenLite, TweenMax, Power2, Linear, TimelineMax, ScrollMagic:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    TweenLite.to('.intro', 1.4, {opacity: 1, ease: Power2.easeIn});
    this.parallax__myDesignLab();
    this.parallax__idKAIST();
  }

  parallax__myDesignLab() {
    const controller = new ScrollMagic.Controller();
    const tween = new TimelineMax()
      .add([
        TweenMax.fromTo("#parallaxContainer .parallax01", 1, 
          {top:500, ease: Linear.easeNone},
          {top:200, ease: Linear.easeNone}),

        TweenMax.fromTo("#parallaxContainer .parallax02", 1, 
          {top:500, ease: Linear.easeNone},
          {top:0, ease: Linear.easeNone}),

        TweenMax.fromTo("#parallaxContainer .parallax03", 1, 
          {top:1000, ease: Linear.easeNone},
          {top:200, ease: Linear.easeNone}),
          
        TweenMax.fromTo("#parallaxContainer .parallax04", 1, 
          {top:1000, ease: Linear.easeNone},
          {top:200, ease: Linear.easeNone}),
				// TweenMax.to("#parallaxContainer .layer2", 1, {backgroundPosition: "0 -500%", ease: Linear.easeNone}),
				// TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "0 -225%", ease: Linear.easeNone})
      ]);

    const scene = new ScrollMagic.Scene({
      triggerElement: "#parallaxContainer",
      duration: 2000,
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
        TweenMax.fromTo("#parallaxContainer .parallax01", 1, 
          {top:500, ease: Linear.easeNone},
          {top:200, ease: Linear.easeNone}),

        TweenMax.fromTo("#parallaxContainer .parallax02", 1, 
          {top:500, ease: Linear.easeNone},
          {top:0, ease: Linear.easeNone}),

        TweenMax.fromTo("#parallaxContainer .parallax03", 1, 
          {top:600, ease: Linear.easeNone},
          {top:200, ease: Linear.easeNone}),
          
				// TweenMax.to("#parallaxContainer .layer2", 1, {backgroundPosition: "0 -500%", ease: Linear.easeNone}),
				// TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "0 -225%", ease: Linear.easeNone})
      ]);

    const scene = new ScrollMagic.Scene({
      triggerElement: "#parallaxContainer__idKAIST",
      duration: 2000,
      offset: 400,  // 800/2
    })
      .setTween(tween)
      .setPin("#parallaxContainer__idKAIST")
      .addTo(controller);
  }

}
