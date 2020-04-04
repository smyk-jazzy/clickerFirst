import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ClickCounterComponent } from '../click-counter/click-counter.component';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css'],
})
export class ClickComponent implements OnInit {
  clickNumber = 0;

  @Input()
  interval = 2000;

  @Input()
  intervalOn = false;

  @Input()
  clickCounter: ClickCounterComponent;

  ngOnInit(): void {
    if (this.intervalOn) {
      setInterval(() => this.incrementClick(), this.interval);
    }
  }

  incrementClick() {
    this.clickNumber += 1;
    this.clickCounter.incrementClick();
  }
}
