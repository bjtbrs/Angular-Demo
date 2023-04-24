import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hero Tours';
  isHeros=false;
  change (bool:boolean):void{
    bool=true;
  }
}
