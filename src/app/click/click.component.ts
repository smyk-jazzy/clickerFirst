import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  clickNumber = 0;

  ngOnInit(): void {
  }

  incrementClick(){
    this.clickNumber += 1;
  }


}
