import { Component, OnInit, Input, Output } from '@angular/core';
import { Upgrade } from '../upgrade';
import { UpgradeServiceService } from '../upgrade-service.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {

  @Input() upgrade: Upgrade;
  
  constructor(public upgradeService: UpgradeServiceService) { }

  ngOnInit(): void {
  }

  onPurchase() {
    if (this.upgradeService.currentNumOfBitcoins == this.upgrade.price) 
    {
      this.upgradeService.currentBitcoinMultiplier += this.upgrade.multiplier;
      this.upgradeService.currentNumOfBitcoins -= this.upgrade.price;
      this.upgradeService.deleteUpgrade(this.upgrade.name);
    }
    
  }
}
