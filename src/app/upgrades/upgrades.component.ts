import { Component, OnInit, Input, Output } from '@angular/core';
import { Upgrade } from '../upgrade';
import { UpgradeService } from '../upgrade-service';
import { NumberFormatService } from './../number-format.service';


@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {

  @Input() upgrade: Upgrade;
  notAvailable : boolean = true;
  priceDisplay : string = '';
  
  constructor(public upgradeService: UpgradeService, public numService : NumberFormatService) { }

  ngOnInit(): void {
    this.priceDisplay = this.numService.formatNumber(this.upgrade.price);
    setInterval(() => {
      if (this.upgradeService.currentNumOfBitcoins >= this.upgrade.price) {
        this.notAvailable = false;
      } else {
        this.notAvailable = true;
      }
    }, 500);
  }

  onPurchase() {
    if (this.upgradeService.currentNumOfBitcoins >= this.upgrade.price) 
    {
      if (this.upgrade.upgradeType == 1) {
        this.upgradeService.bitcoinsPerClick *= this.upgrade.multiplier;
      }
      else if (this.upgrade.upgradeType == 2) {
        // Still need to figure out
      }
      else if (this.upgrade.upgradeType == 3) {
        this.upgradeService.motherMultiplier *= this.upgrade.multiplier;
      }
      else if (this.upgrade.upgradeType == 4) {
        this.upgradeService.CPUMultiplier *= this.upgrade.multiplier;
      }
      else if (this.upgrade.upgradeType == 5) {
        this.upgradeService.inputMultiplier *= this.upgrade.multiplier;
      }
      else if (this.upgrade.upgradeType == 6) {
        this.upgradeService.outputMultiplier *= this.upgrade.multiplier;
      }
      else if (this.upgrade.upgradeType == 7) {
        this.upgradeService.mainMemMultiplier *= this.upgrade.multiplier;
      }
      else if (this.upgrade.upgradeType == 8) {
        this.upgradeService.secMemMultiplier *= this.upgrade.multiplier;
      }
      else if (this.upgrade.upgradeType == 9) {
        this.upgradeService.graphicsMultiplier *= this.upgrade.multiplier;
      }
      else {
        // Should never reach this point
      }

      this.upgradeService.currentNumOfBitcoins -= this.upgrade.price;
      this.upgradeService.totalBitcoinsSpent += this.upgrade.price;
      this.upgradeService.deleteUpgrade(this.upgrade.name);
    }
  }
}
