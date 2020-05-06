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
  notAvailable : boolean = true;
  priceDisplay;
  numOwnedDisplay;
  
  constructor(public upgradeService: UpgradeService, public hardwareService: HardwareService) { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.upgradeService.currentNumOfBitcoins >= this.hardware.price) {
        this.notAvailable = false;
      } else {
        this.notAvailable = true;
      }
    }, 500);
  }

  onPurchase() {
    if (this.upgradeService.currentNumOfBitcoins >= this.hardware.price) 
    {
      this.upgradeService.currentBitcoinMultiplier += this.hardware.defaultProduction;
      this.upgradeService.currentNumOfBitcoins -= this.hardware.price;
      this.upgradeService.totalBitcoinsSpent += this.hardware.price;

      this.hardwareService.buyHardware(this.hardware.name);

      
      if (this.hardware.name == "CPU (Central Processing Unit)") {
        this.upgradeService.unlockCPUUprades(this.hardware.totalAmount);
      }
      if (this.hardware.name == "Motherboard") {
        this.upgradeService.unlockMotherboardprades(this.hardware.totalAmount);
      }
      if (this.hardware.name == "Input Devices") {
        this.upgradeService.unlockInputUprades(this.hardware.totalAmount);
      }
      if (this.hardware.name == "Output Devices") {
        this.upgradeService.unlockOutputUprades(this.hardware.totalAmount);
      }
      if (this.hardware.name == "Main Memory") {
        this.upgradeService.unlockMainMemoryUprades(this.hardware.totalAmount);
      }
      if (this.hardware.name == "Secondary Memory") {
        this.upgradeService.unlockSecMemoryUprades(this.hardware.totalAmount);
      }
      if (this.hardware.name == "Graphics Card") {
        this.upgradeService.unlockGraphicsUprades(this.hardware.totalAmount);
      }
   
    }
  }

}
