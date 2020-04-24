import { Injectable } from '@angular/core';
import { Component_Computer } from './component';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor() { }

  availableComponents: Component_Computer[] = [
    {
      name: "CPU (Central Processing Unit)",
      description: "The CPU is the primary component responcible for running instructions. Each computer must have a CPU chip to function.",
      actualPrice: 10,
      price: 10,
      defaultProduction: 1.5,
      production: 1.5
    },
    {
      name: "Motherboard",
      description: "The Motherboard is the main circuit board of a computer. It contains the CPU, ROM, RAM slots, PCI slots, and USB ports. A must have for any computer!",
      actualPrice: 20,
      price: 20,
      defaultProduction: 1.5,
      production: 1.5
    },
    {
      name: "Random Access Memory (RAM)",
      description: "Random Access Memory (RAM) is an ideal location for active applications to be held. It is also where the system services are held."
        + " More applications can run simultaneously with more RAM, which will improve your Bitcoin production!",
      actualPrice: 30,
      price: 30,
      defaultProduction: 1.5,
      production: 1.5
    }


  ]
  increasePrice(name: string) {
    for (let i = 0; i < this.availableComponents.length; i++)
      {
        if (this.availableComponents[i].name === name)
        {
          this.availableComponents[i].actualPrice *= 1.15;
          this.availableComponents[i].price = Math.ceil(this.availableComponents[i].actualPrice)
          break;        
        }
    }
  }
}
