import { Injectable } from '@angular/core';
import { Upgrade } from './upgrade';
import { CPUUPGRADES, MOTHERBOARDUPGRADES, INPUTDEVICESUPGRADES, OUTPUTDEVICESUPGRADES, MAINMEMORYUPGRADES, SECMEMORYUPGRADES, GRAPHICSCARDUPGRADES } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  currentBitcoinMultiplier: number = 0;
  currentNumOfBitcoins: number = 0;
  indexCPU = 0;
  indexMother = 0;
  indexRAM = 0;
  indexInput = 0;
  indexOutput = 0;
  indexMainMem = 0;
  indexSecMem = 0;
  indexGraphics = 0;
  totalBitcoinsSpent: number = 0;

  availableUpgrades: Upgrade[] = [
    {
      name: "Your First Upgrade!",
      description: "Here's a small boost to double your clicks!",
      price: 50,
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

  unlockMotherboardprades(total: number) {
    if (total % 10 == 0)
    {
      this.availableUpgrades.push(MOTHERBOARDUPGRADES[this.indexMother]);
      this.indexMother++;
    }
  }

  unlockCPUUprades(total: number) {
    if (total % 10 == 0)
    {
      this.availableUpgrades.push(CPUUPGRADES[this.indexCPU]);
      this.indexCPU++;
    }
  }

  unlockInputUprades(total: number) {
    if (total % 10 == 0)
    {
      this.availableUpgrades.push(INPUTDEVICESUPGRADES[this.indexInput]);
      this.indexInput++;
    }
  }

  unlockOutputUprades(total: number) {
    if (total % 10 == 0)
    {
      this.availableUpgrades.push(OUTPUTDEVICESUPGRADES[this.indexOutput]);
      this.indexOutput++;
    }
  }

  unlockMainMemoryUprades(total: number) {
    if (total % 10 == 0)
    {
      this.availableUpgrades.push(MAINMEMORYUPGRADES[this.indexMainMem]);
      this.indexMainMem++;
    }
  }

  unlockSecMemoryUprades(total: number) {
    if (total % 10 == 0)
    {
      this.availableUpgrades.push(SECMEMORYUPGRADES[this.indexSecMem]);
      this.indexSecMem++;
    }
  }

  unlockGraphicsUprades(total: number) {
    if (total % 10 == 0)
    {
      this.availableUpgrades.push(GRAPHICSCARDUPGRADES[this.indexGraphics]);
      this.indexGraphics++;
    }
  }

}
      
