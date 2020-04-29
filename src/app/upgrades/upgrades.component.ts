import { Component, OnInit, Input, Output } from '@angular/core';
import { Upgrade } from '../upgrade';
import { UpgradeService } from '../upgrade-service';


@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {

  @Input() upgrade: Upgrade;
  notAvailable : boolean = true;
  
  constructor(public upgradeService: UpgradeService) { }

  ngOnInit(): void {
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
      this.upgradeService.currentBitcoinMultiplier += this.upgrade.multiplier;
      this.upgradeService.currentNumOfBitcoins -= this.upgrade.price;
      this.upgradeService.totalBitcoinsSpent += this.upgrade.price;
      this.upgradeService.deleteUpgrade(this.upgrade.name);
    }
  }
}
