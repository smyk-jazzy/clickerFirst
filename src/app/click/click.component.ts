import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {ClickCounterComponent} from '../click-counter/click-counter.component';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  clickNumber = 0;

  // @ViewChild('clickCounter')
  // clickCounterA: ClickCounterComponent;

  @Input()
  clickCounter: ClickCounterComponent;


  ngOnInit(): void {
  }

  incrementClick(){
    this.clickNumber += 1;
    this.clickCounter.incrementClick();
  }



}
