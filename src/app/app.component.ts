import { BColorService } from './services/b-color.service';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  bColor:string;

  constructor(private bColorService:BColorService){

    this.bColor = this.bColorService.bColor;

  }


}
