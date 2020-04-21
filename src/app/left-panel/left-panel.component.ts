import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  currentNumOfBitcoins: number = 0;
  bitcoinsPerSecond: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.currentNumOfBitcoins++;
  }

}
