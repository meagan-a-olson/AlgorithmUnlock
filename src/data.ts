import { Upgrade } from './app/upgrade';
import { Component_Computer } from './app/component';

export const CLICKUPGRADES: Upgrade[] = [
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

export const CPUUPGRADES: Upgrade[] = [
  {
    name: "Beginner CPU",
    description: "Worth about the same as an old potato chip.",
    price: 20,
    multiplier: 1.2
  },
  {
    name: "Intermediate CPU",
    description: "As they say in the movies: Not bad for computing kid.",
    price: 40,
    multiplier: 1.4
  },
  {
    name: "Advanced CPU",
    description: "Shiny, crisp, and has that new car smell.",
    price: 60,
    multiplier: 1.6
  }
]

export const MOTHERBOARDUPGRADES: Upgrade[] = [
  {
    name: "Junk Motherboard",
    description: "Not exactly a piece of art, but functional.",
    price: 30,
    multiplier: 1.3
  },
  {
    name: "Small Motherboard",
    description: "Look at the small guy run! Adorable.",
    price: 50,
    multiplier: 1.5
  },
  {
    name: "Medium Motherboard",
    description: "Just your Average Joe dodgeba- I mean motherboard.",
    price: 70,
    multiplier: 1.7
  }
]

export const RAMUPGRADES: Upgrade[] = [
  {
    name: "Single Channel RAM",
    description: "Yet a single ram in a swarm of sheep. A sheep swarm if you may.",
    price: 50,
    multiplier: 1.7
  },
  {
    name: "Double Channel RAM",
    description: "Is it possible to learn this power?",
    price: 70,
    multiplier: 1.9
  },
  {
    name: "Quadruple Channel RAM",
    description: "MORE POWER! MOOOOOOOOORRREEEE!",
    price: 90,
    multiplier: 2.1
  }
]

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
