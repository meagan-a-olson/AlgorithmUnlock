import { Component, OnInit } from '@angular/core';
import { UpgradeService } from '../upgrade-service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  currentNumOfBitcoins: number = 0;
  bitcoinsPerSecond: number = 0;
  constructor(public upgradeService: UpgradeService) { }

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
  onDebugClick() {
    this.currentNumOfBitcoins = this.upgradeService.currentNumOfBitcoins;
    this.currentNumOfBitcoins = this.currentNumOfBitcoins + 1000000000000;
    this.upgradeService.currentNumOfBitcoins = this.currentNumOfBitcoins;
  }
}
