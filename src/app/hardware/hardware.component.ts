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
  notAvailable1 : boolean = true;
  notAvailable10 : boolean = true;
  notAvailable100 : boolean = true;
  
  constructor(public upgradeService: UpgradeService, public hardwareService: HardwareService) { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.upgradeService.currentNumOfBitcoins >= this.hardware.price) {
        this.notAvailable1 = false;
      } else {
        this.notAvailable1 = true;
      }
      if (this.upgradeService.currentNumOfBitcoins >= this.getPriceOf10()) {
        this.notAvailable10 = false;
      } else {
        this.notAvailable10 = true;
      }
      if (this.upgradeService.currentNumOfBitcoins >= this.getPriceOf100()) {
        this.notAvailable100 = false;
      } else {
        this.notAvailable100 = true;
      }
    }, 500);
  }

  onPurchase() {
    if (this.upgradeService.currentNumOfBitcoins >= this.hardware.price) 
    {

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
  getPriceOf10() {
    return this.hardwareService.checkPriceOf10(this.hardware.name);
  }
  getPriceOf100() {
    return this.hardwareService.checkPriceOf100(this.hardware.name);
  }
  purchase10() {
    for (let i = 0; i < 10; i++) {
      this.onPurchase()
    }
  }
  purchase100() {
    for (let i = 0; i < 100; i++) {
      this.onPurchase()
    }
  }

}
