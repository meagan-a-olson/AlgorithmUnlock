import { Injectable } from '@angular/core';
import { Upgrade } from './upgrade';

@Injectable({
  providedIn: 'root'
})
export class UpgradeServiceService {

  currentBitcoinMultiplier: number = 0;
  currentNumOfBitcoins: number = 0;

  availableUpgrades: Upgrade[] = [
    {
      name: "SuperClicker",
      description: "Increase your clicks!",
      price: 10,
      multiplier: 1.5
    },
    {
      name: "UltraClicker",
      description: "Increase your clicks to infinity!",
      price: 20,
      multiplier: 1.5
    },
    {
      name: "MegaClicker",
      description: "Increase your clicks to infinity and beyond!",
      price: 30,
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

}
      
