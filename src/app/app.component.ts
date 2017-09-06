import { Observable } from 'rxjs/Rx';
import { BColorService } from './services/b-color.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private bColor$:Observable<string>;

  constructor(private bColorService:BColorService){

  }

  ngOnInit() {
    this.bColor$ = this.bColorService.color$
      .do( color => console.log(color));
  }


}
