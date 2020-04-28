import { Upgrade } from './app/upgrade';
import { Component_Computer } from './app/component';

export const UPGRADES: Upgrade[] = [
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
];

export const HARDWARE: Component_Computer[] = [
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
];
