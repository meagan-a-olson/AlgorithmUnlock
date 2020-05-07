import { Injectable } from '@angular/core';
import { Hardware } from './hardware';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor() { }

  availableHardware: Hardware[] = [
    {
      name: "Motherboard",
      description: "The Motherboard is the main circuit board of a computer. It contains the CPU, ROM, RAM slots, PCI slots, and USB ports. A must have for any computer!",
      actualPrice: 15,
      price: 15,
      defaultProduction: 0.5,
      production: 0.5,
      totalAmount: 0
    },
    {
      name: "CPU (Central Processing Unit)",
      description: "The CPU is the primary component responcible for running instructions. Each computer must have a CPU chip to function.",
      actualPrice: 100,
      price: 100,
      defaultProduction: 2,
      production: 2,
      totalAmount: 0
    },
    {
      name: "Input Devices",
      description: "Every user needs to interact with a computer, and proper input devices, such as a mouse and keyboard, are essential tools. "
       + "These devices send data to the computer which allows you to adequately interact with it. With these, you are under Ctrl.",
      actualPrice: 400,
      price: 400,
      defaultProduction: 10,
      production: 10,
      totalAmount: 0
    },
    {
      name: "Output Devices",
      description: "Output devices are external peripherals that receive data and convert it into a tangible medium for users. "
       + "A Bitcoin miner wouldn't be complete without this!",
      actualPrice: 750,
      price: 750,
      defaultProduction: 15,
      production: 15,
      totalAmount: 0
    },
    {
      name: "Main Memory",
      description: "Main Memory, in the form of RAM, is an ideal location for active applications to be held. It is also where the system services are held."
        + " More applications can run simultaneously with more RAM, which will improve your Bitcoin production!",
      actualPrice: 2000,
      price: 2000,
      defaultProduction: 50,
      production: 50,
      totalAmount: 0
    },
    {
      name: "Secondary Memory",
      description: "Secondary Memory, also known as external memory, comes in many forms, such as HDD and SSD."
        + " Secondary memory is non-volitile, so it can hold onto its data with or without a power source. Your computer needs this to store your data in the long term!",
      actualPrice: 5000,
      price: 5000,
      defaultProduction: 100,
      production: 100,
      totalAmount: 0
    },
    {
      name: "Graphics Card",
      description: "The Graphics Card allows your device to display graphical data. It takes some of the strain off of the CPU by "
       + "allocating graphical processing instructions, increasing the strength of your mining.",
      actualPrice: 10000,
      price: 10000,
      defaultProduction: 250,
      production: 250,
      totalAmount: 0
    }
  ]
  increasePrice(name: string) {
    for (let i = 0; i < this.availableHardware.length; i++)
      {
        if (this.availableHardware[i].name === name)
        {
          this.availableHardware[i].actualPrice *= 1.05;
          this.availableHardware[i].price = Math.ceil(this.availableHardware[i].actualPrice)
          break;        
        }
    }
  }
  getProduction(name: string) {
    for (let i = 0; i < this.availableHardware.length; i++)
      {
        if (this.availableHardware[i].name === name)
        {
         return this.availableHardware[i].production        
        }
    }
    return 0; // should never reach here
  }
  getAmount(name: string) {
    for (let i = 0; i < this.availableHardware.length; i++)
      {
        if (this.availableHardware[i].name === name)
        {
         return this.availableHardware[i].totalAmount        
        }
    }
    return 0; // should never reach here
  }
  buyHardware(name: string) {
    for (let i = 0; i < this.availableHardware.length; i++)
      {
        if (this.availableHardware[i].name === name)
        {
          this.availableHardware[i].totalAmount++;
          this.increasePrice(name);
          break;        
        }
    }
  }
  checkPriceOf10(name: string) {
    for (let i = 0; i < this.availableHardware.length; i++)
      {
        if (this.availableHardware[i].name === name)
        {
          var testActualPrice = this.availableHardware[i].actualPrice;
          var testPrice = this.availableHardware[i].price;
          var returnTotal = 0;

          for (let j = 0; j < 10; j++) {
            testActualPrice *= 1.05;
            testPrice = Math.ceil(testActualPrice);
            returnTotal = returnTotal + testPrice;
          }
          return returnTotal;        
        }
    }
    return 0; // Should never reach this.
  }

  checkPriceOf100(name: string) {
    for (let i = 0; i < this.availableHardware.length; i++)
      {
        if (this.availableHardware[i].name === name)
        {
          var testActualPrice = this.availableHardware[i].actualPrice;
          var testPrice = this.availableHardware[i].price;
          var returnTotal = 0;

          for (let j = 0; j < 100; j++) {
            testActualPrice *= 1.05;
            testPrice = Math.ceil(testActualPrice);
            returnTotal = returnTotal + testPrice;
          }
          return returnTotal;        
        }
    }
    return 0; // Should never reach this.
  }
}
