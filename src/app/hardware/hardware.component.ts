import { Component, OnInit, Input } from '@angular/core';
import { Hardware } from '../hardware';
import { HardwareService } from '../hardware.service';
import { UpgradeService } from '../upgrade-service';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  @Input() hardware: Hardware;
  
  constructor(public upgradeService: UpgradeService, public hardwareService: HardwareService) { }

  ngOnInit(): void {
  }

  onPurchase() {
    if (this.upgradeService.currentNumOfBitcoins >= this.hardware.price) 
    {
      this.upgradeService.currentBitcoinMultiplier += this.hardware.defaultProduction;
      this.upgradeService.currentNumOfBitcoins -= this.hardware.price;
      this.hardwareService.increasePrice(this.hardware.name);
    }
    
  }
}
