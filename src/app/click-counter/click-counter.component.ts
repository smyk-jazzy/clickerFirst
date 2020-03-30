import { Component } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent {
  allClicks = 0;

  public incrementClick(){
    this.allClicks += 1;
  }

}
