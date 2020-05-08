import { Injectable } from '@angular/core';
import { Upgrade } from './upgrade';
import { CPUUPGRADES, MOTHERBOARDUPGRADES, INPUTDEVICESUPGRADES, OUTPUTDEVICESUPGRADES, MAINMEMORYUPGRADES, SECMEMORYUPGRADES, GRAPHICSCARDUPGRADES } from 'src/data';
import { HardwareService } from './hardware.service';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  constructor(public hardwareService: HardwareService) { }

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
  gameWon: boolean = false;
  

  // Establishes # of hardware needed to unlock next upgrade
  motherNeededTotal = 5;
  CPUNeededTotal = 5;
  inputNeededTotal = 5;
  outputNeededTotal = 5;
  mainMemNeededTotal = 5;
  secMemNeededTotal = 5;
  graphicsNeededTotal = 5;

  // Keeps track of Upgrade Multiplier for each hardware
  motherMultiplier = 1;
  CPUMultiplier = 1;
  inputMultiplier = 1;
  outputMultiplier = 1;
  mainMemMultiplier = 1;
  secMemMultiplier = 1;
  graphicsMultiplier = 1;

  availableUpgrades: Upgrade[] = [
    {
      name: "Starter Pick-Me-Up",
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
    if (total >= this.motherNeededTotal && this.indexMother < 10)
    {
      this.availableUpgrades.push(MOTHERBOARDUPGRADES[this.indexMother]);
      this.indexMother++;
      this.motherNeededTotal *= 1.745;
    }
  }

  unlockCPUUprades(total: number) {
    if (total >= this.CPUNeededTotal && this.indexCPU < 10)
    {
        this.availableUpgrades.push(CPUUPGRADES[this.indexCPU]);
        this.indexCPU++;
        this.CPUNeededTotal *= 1.745;  
    }
  }

  unlockInputUprades(total: number) {
    if (total >= this.inputNeededTotal && this.indexInput < 10)
    {
      this.availableUpgrades.push(INPUTDEVICESUPGRADES[this.indexInput]);
      this.indexInput++;
      this.inputNeededTotal *= 1.745;
    }
  }

  unlockOutputUprades(total: number) {
    if (total >= this.outputNeededTotal && this.indexOutput < 10)
    {
      this.availableUpgrades.push(OUTPUTDEVICESUPGRADES[this.indexOutput]);
      this.indexOutput++;
      this.outputNeededTotal *= 1.745;
    }
  }

  unlockMainMemoryUprades(total: number) {
    if (total >= this.mainMemNeededTotal && this.indexMainMem < 10)
    {
      this.availableUpgrades.push(MAINMEMORYUPGRADES[this.indexMainMem]);
      this.indexMainMem++;
      this.mainMemNeededTotal *= 1.745;
    }
  }

  unlockSecMemoryUprades(total: number) {
    if (total >= this.secMemNeededTotal && this.indexSecMem < 10)
    {
      this.availableUpgrades.push(SECMEMORYUPGRADES[this.indexSecMem]);
      this.indexSecMem++;
      this.secMemNeededTotal *= 1.745;
    }
  }

  unlockGraphicsUprades(total: number) {
    if (total >= this.graphicsNeededTotal && this.indexGraphics < 10)
    {
      this.availableUpgrades.push(GRAPHICSCARDUPGRADES[this.indexGraphics]);
      this.indexGraphics++;
      this.graphicsNeededTotal *= 1.745;
    }
  }

  calculateCurrentBitcoinProduction() {
    var production;
    production = this.hardwareService.getProduction("CPU (Central Processing Unit)") * this.hardwareService.getAmount("CPU (Central Processing Unit)") * this.CPUMultiplier +
      this.hardwareService.getProduction("Motherboard") * this.hardwareService.getAmount("Motherboard") * this.motherMultiplier +
      this.hardwareService.getProduction("Input Devices") * this.hardwareService.getAmount("Input Devices") * this.inputMultiplier+ 
      this.hardwareService.getProduction("Output Devices") * this.hardwareService.getAmount("Output Devices") * this.outputMultiplier + 
      this.hardwareService.getProduction("Main Memory") * this.hardwareService.getAmount("Main Memory") * this.mainMemMultiplier + 
      this.hardwareService.getProduction("Secondary Memory") * this.hardwareService.getAmount("Secondary Memory") * this.secMemMultiplier + 
      this.hardwareService.getProduction("Graphics Card") * this.hardwareService.getAmount("Graphics Card")* this.graphicsMultiplier;
    return production;
  }
}
      
