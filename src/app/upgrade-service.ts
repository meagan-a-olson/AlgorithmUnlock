import { Injectable } from '@angular/core';
import { Upgrade } from './upgrade';
import { CPUUPGRADES, MOTHERBOARDUPGRADES, INPUTDEVICESUPGRADES, OUTPUTDEVICESUPGRADES, MAINMEMORYUPGRADES, SECMEMORYUPGRADES, GRAPHICSCARDUPGRADES } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  currentBitcoinMultiplier: number = 0;
  bitcoinsPerClick: number = 1;
  currentNumOfBitcoins: number = 0;
  totalBitcoinsSpent: number = 0;

  // Keeps track of next upgrade in each list
  indexCPU = 0;
  indexMother = 0;
  indexInput = 0;
  indexOutput = 0;
  indexMainMem = 0;
  indexSecMem = 0;
  indexGraphics = 0;
  

  // Establishes # of hardware needed to unlock next upgrade
  motherNeededTotal = 5;
  CPUNeededTotal = 5;
  inputNeededTotal = 5;
  outputNeededTotal = 5;
  mainMemNeededTotal = 5;
  secMemNeededTotal = 5;
  graphicsNeededTotal = 5;


  availableUpgrades: Upgrade[] = [
    {
      name: "Your First Upgrade!",
      description: "Here's a small boost to double your clicks!",
      price: 50,
      multiplier: 2,
      upgradeType: 1
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
    if (total >= this.motherNeededTotal)
    {
      this.availableUpgrades.push(MOTHERBOARDUPGRADES[this.indexMother]);
      this.indexMother++;
      this.motherNeededTotal *= 2;
    }
  }

  unlockCPUUprades(total: number) {
    if (total >= this.CPUNeededTotal)
    {
        this.availableUpgrades.push(CPUUPGRADES[this.indexCPU]);
        this.indexCPU++;
        this.CPUNeededTotal *= 2;  
    }
  }

  unlockInputUprades(total: number) {
    if (total >= this.inputNeededTotal)
    {
      this.availableUpgrades.push(INPUTDEVICESUPGRADES[this.indexInput]);
      this.indexInput++;
      this.inputNeededTotal *= 2;
    }
  }

  unlockOutputUprades(total: number) {
    if (total >= this.outputNeededTotal)
    {
      this.availableUpgrades.push(OUTPUTDEVICESUPGRADES[this.indexOutput]);
      this.indexOutput++;
      this.outputNeededTotal *= 2;
    }
  }

  unlockMainMemoryUprades(total: number) {
    if (total >= this.mainMemNeededTotal)
    {
      this.availableUpgrades.push(MAINMEMORYUPGRADES[this.indexMainMem]);
      this.indexMainMem++;
      this.mainMemNeededTotal *= 2;
    }
  }

  unlockSecMemoryUprades(total: number) {
    if (total >= this.secMemNeededTotal)
    {
      this.availableUpgrades.push(SECMEMORYUPGRADES[this.indexSecMem]);
      this.indexSecMem++;
      this.secMemNeededTotal *= 2;
    }
  }

  unlockGraphicsUprades(total: number) {
    if (total >= this.graphicsNeededTotal)
    {
      this.availableUpgrades.push(GRAPHICSCARDUPGRADES[this.indexGraphics]);
      this.indexGraphics++;
      this.graphicsNeededTotal *= 2;
    }
  }

}
      
