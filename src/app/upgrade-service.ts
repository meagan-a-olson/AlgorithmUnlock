import { Injectable } from '@angular/core';
import { Upgrade } from './upgrade';
import { CPUUPGRADES, MOTHERBOARDUPGRADES, RAMUPGRADES } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  currentBitcoinMultiplier: number = 0;
  currentNumOfBitcoins: number = 0;
  indexCPU = 0;
  indexMother = 0;
  indexRAM = 0;
  totalBitcoinsSpent: number = 0;

  availableUpgrades: Upgrade[] = [
    {
      name: "SuperClicker",
      description: "Increase your clicks!",
      price: 10,
      multiplier: 1.5
    }
  ]

  deleteUpgrade(name: string) {
    for (let i = 0; i < this.availableUpgrades.length; i++)
      {
        if (this.availableUpgrades[i].name === name)
        {
          this.availableUpgrades.splice(i, 1);
          break;        
        }
    }
  }

  unlockCPUUprades(totalCPU: number) {
    if (totalCPU % 10 == 0)
    {
      this.availableUpgrades.push(CPUUPGRADES[this.indexCPU]);
      this.indexCPU++;
    }
  }

  unlockMotherboardprades(totalCPU: number) {
    if (totalCPU % 10 == 0)
    {
      this.availableUpgrades.push(MOTHERBOARDUPGRADES[this.indexMother]);
      this.indexMother++;
    }
  }

  unlockRAMUprades(totalCPU: number) {
    if (totalCPU % 10 == 0)
    {
      this.availableUpgrades.push(RAMUPGRADES[this.indexRAM]);
      this.indexRAM++;
    }
  }

}
      
