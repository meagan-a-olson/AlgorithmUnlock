import { Injectable } from '@angular/core';
import { Hardware } from './hardware';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor() { }

  availableHardware: Hardware[] = [
    {
      name: "CPU (Central Processing Unit)",
      description: "The CPU is the primary component responcible for running instructions. Each computer must have a CPU chip to function.",
      actualPrice: 10,
      price: 10,
      defaultProduction: 1.5,
      production: 1.5,
      totalAmount: 0
    },
    {
      name: "Motherboard",
      description: "The Motherboard is the main circuit board of a computer. It contains the CPU, ROM, RAM slots, PCI slots, and USB ports. A must have for any computer!",
      actualPrice: 20,
      price: 20,
      defaultProduction: 1.5,
      production: 1.5,
      totalAmount: 0
    },
    {
      name: "Random Access Memory (RAM)",
      description: "Random Access Memory (RAM) is an ideal location for active applications to be held. It is also where the system services are held."
        + " More applications can run simultaneously with more RAM, which will improve your Bitcoin production!",
      actualPrice: 30,
      price: 30,
      defaultProduction: 1.5,
      production: 1.5,
      totalAmount: 0
    }


  ]
  increasePrice(name: string) {
    for (let i = 0; i < this.availableHardware.length; i++)
      {
        if (this.availableHardware[i].name === name)
        {
          this.availableHardware[i].actualPrice *= 1.15;
          this.availableHardware[i].price = Math.ceil(this.availableHardware[i].actualPrice)
          break;        
        }
    }
  }
}
