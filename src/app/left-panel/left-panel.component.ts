import { Component, OnInit } from '@angular/core';
import { UpgradeService } from './../upgrade-service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  currentNumOfBitcoins: number = 0;
  bitcoinsPerSecond: number = 0;
  bitcoinsPerClick: number = 1;
  allTimeBitcoins: number = 0;
  bitcoinsbyClicking: number = 0;
  totalClicks: number = 0;
  bitcoinsSpent: number = 0;

  constructor(public upgradeService: UpgradeService) { }

  ngOnInit(): void {
    // Updates both current bitcoin total and bitcoins/s every second. Interval can be changed.
    setInterval(() => {
      this.updateBitcoinNum(this.bitcoinsPerSecond, true)
      this.bitcoinsPerSecond = this.upgradeService.currentBitcoinMultiplier;
      this.bitcoinsPerClick = this.upgradeService.bitcoinsPerClick;
      this.allTimeBitcoins += this.bitcoinsPerSecond;
      this.bitcoinsSpent = this.upgradeService.totalBitcoinsSpent;
    }, 1000)
  }

  /**
   * Adds or subtracts the given amount of bitcoin from the running total
   * @param {number} num - The number of bitcoin to add or subtract
   * @param {boolean} add - True if bitcoin should be added; false if subtracted
   */
  updateBitcoinNum(num : number, add : boolean) {
    this.currentNumOfBitcoins = this.upgradeService.currentNumOfBitcoins;
    if (add) {
      this.currentNumOfBitcoins += num;
    } else {
      this.currentNumOfBitcoins -= num;
    }
    this.upgradeService.currentNumOfBitcoins = this.currentNumOfBitcoins;
  }

  onClick() {
    this.updateBitcoinNum(this.bitcoinsPerClick, true);
    this.allTimeBitcoins += this.bitcoinsPerClick;
    this.bitcoinsbyClicking += this.bitcoinsPerClick;
    this.totalClicks++;
    }

  onDebugClick() {
    this.updateBitcoinNum(1000000000000, true);
  }

}
