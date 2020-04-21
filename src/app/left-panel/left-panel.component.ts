import { Component, OnInit } from '@angular/core';
import { UpgradeServiceService } from '../upgrade-service.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  currentNumOfBitcoins: number = 0;
  bitcoinsPerSecond: number = 0;
  constructor(public upgradeService: UpgradeServiceService) { }

  ngOnInit(): void {
  }

  onClick() {
    // Method needs to run after every purchase, but before next click [Keep in this order]
    this.currentNumOfBitcoins = this.upgradeService.currentNumOfBitcoins;

    this.currentNumOfBitcoins++;
    this.upgradeService.currentNumOfBitcoins = this.currentNumOfBitcoins;
    
    // Method need to after every purchase, but before next click
    this.bitcoinsPerSecond = this.upgradeService.currentBitcoinMultiplier;
  }

}
