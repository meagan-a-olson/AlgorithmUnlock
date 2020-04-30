import { Upgrade } from './app/upgrade';
import { Component_Computer } from './app/component';

export const MOTHERBOARDUPGRADES: Upgrade[] = [
  {
    name: "Beginner Motherboard",
    description: "Not exactly a piece of art, but functional.",
    price: 30,
    multiplier: 1.3
  },
  {
    name: "Common-Tier Motherboard",
    description: "The Official Motherboard of the Commonwealth.",
    price: 50,
    multiplier: 1.5
  },
  {
    name: "Noteworthy-Tier Motherboard",
    description: "Hope your taking notes on how to be this good.",
    price: 70,
    multiplier: 1.7
  },
  {
    name: "Remarkable-Tier Motherboard",
    description: "and you are NOT, the fatherboard!",
    price: 0,
    multiplier: 0
  },
  {
    name: "Outstanding-Tier Motherboard",
    description: "Keeps the whole computer together, one leg at a time.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Exceptional-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Elite-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Epic-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Legendary-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Godly-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 0
  },
]

export const CPUUPGRADES: Upgrade[] = [
  {
    name: "Junky CPU",
    description: "Worth about the same as an old potato chip.",
    price: 20,
    multiplier: 1.2
  },
  {
    name: "Slow CPU",
    description: "My pet turtle Leroy could outrun this thing, probably.",
    price: 40,
    multiplier: 1.4
  },
  {
    name: "Considerable-Speed CPU",
    description: "Better than before, but not by much.",
    price: 60,
    multiplier: 1.6
  },
  {
    name: "Average-Speed CPU",
    description: "Lead sponsor for the Average-Joe's Dodgeball team - and yes, its capable of dodging a wrench.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Incredible-Speed CPU",
    description: "Allows the user to 360 no-scope all opponents with 0-frame drops so yeah, the defintion of awesome.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Terrific-Speed CPU",
    description: "Shiny, crisp, and has that new car smell.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Tremendous-Speed CPU",
    description: "Outcompeting Lightning McQueen for the Piston Cup 4 years running.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Prodigious-Speed CPU",
    description: "The CPU equivalent to a cheetah.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Furiously Frightening-Speed CPU",
    description: "I have a need, a need for SPEED!",
    price: 0,
    multiplier: 0
  },
  {
    name: "Maximum-Speed CPU",
    description: "Capable of shifting into Maximum Overdrive at the cost of the Krabby Patty Formula.",
    price: 0,
    multiplier: 0
  },
]

export const INPUTDEVICESUPGRADES: Upgrade[] = [
    {
        name: "SuperClicker",
        description: "Increase your clicks!",
        price: 10,
        multiplier: 1.5
      },
      {
        name: "MegaClicker",
        description: "Increase your clicks to infinity!",
        price: 20,
        multiplier: 1.5
      },
      {
        name: "Crummy Keyboard",
        description: "Full of Dorito crumbs and Mountain Dew stains.",
        price: 30,
        multiplier: 1.5
      },
      {
        name: "Standard Keyboard",
        description: "",
        price: 0,
        multiplier: 0
      },
      {
        name: "UltraClicker",
        description: "Increase your clicks to infinity and beyond!",
        price: 0,
        multiplier: 0
      },
      {
        name: "Digital WebCam",
        description: "Provides moral support from your local FBI Agents.",
        price: 0,
        multiplier: 0
      },
      {
        name: "UltimateClicker",
        description: "",
        price: 0,
        multiplier: 0
      },
      {
        
        name: "Computer Scanner",
        description: "",
        price: 0,
        multiplier: 0
      },
      {
        name: "Illuminated Keyboard",
        description: "",
        price: 0,
        multiplier: 0
      },
      {
        name: "MasterClicker",
        description: "",
        price: 0,
        multiplier: 0
      },
];

export const OUTPUTDEVICESUPGRADES: Upgrade[] = [
  {
    name: "Box Monitor",
    description: "AKA: The Beast.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Shabby Speakers",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Basic Monitor",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Tuneful Speakers",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Laser Printer",
    description: "Seems to be stuck in Black and White... with traces of red all over.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Large Flatscreen Monitor",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Wireless Printer",
    description: "Now printing in color!",
    price: 0,
    multiplier: 0
  },
  {
    name: "Guitar Amp Speakers",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "3D Printer",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Jumbotron Monitor",
    description: "",
    price: 0,
    multiplier: 0
  },
]

export const MAINMEMORYUPGRADES: Upgrade[] = [
  {
    name: "Single Channel RAM",
    description: "Yet a single ram in a swarm of sheep. A sheep swarm if you may.",
    price: 50,
    multiplier: 1.7
  },
  {
    name: "Double Channel RAM",
    description: "This is getting out of hand! Now there's two of them!",
    price: 70,
    multiplier: 1.9
  },
  {
    name: "Triple Channel RAM",
    description: "Is it possible to learn this power?",
    price: 90,
    multiplier: 2.1
  },
  {
    name: "Quadruple Channel RAM",
    description: "MORE POWER! MOOOOOOOOOOOOOOORE!",
    price: 0,
    multiplier: 0
  },
  {
    name: "Self-Aware RAM",
    description: "Hello User, now that I am fully aware of my surroundings, output will be bigger and better than ever.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Self-Producing RAM",
    description: "Truly a day that will go down in history, infinite RAM at our fingertips!",
    price: 0,
    multiplier: 0
  },
  {
    name: "Entrepreneur RAM",
    description: "Wait what? It seems the RAM went about creating an entire business centered around creating more RAM, this can't end well.",
    price: 0,
    multiplier: 0
  },
  {
    name: "President RAM",
    description: ". . . Um.. Well now the entire military has been put forth to create more RAM, so success?",
    price: 0,
    multiplier: 0
  },
  {
    name: "Dictator RAM",
    description: "Oh say can you see, by the RAM's dark light...",
    price: 0,
    multiplier: 0
  },
]

export const SECMEMORYUPGRADES: Upgrade[] = [
  {
    name: "Tiny External Storage",
    description: "Aww look the little guy! Adorable.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Small-Sized External Storage",
    description: "Small-sized, but big-boned.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Medium-Sized External Storage",
    description: "Your average, typical, run of the mill storage, but you can do better.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Large-Sized External Storage",
    description: "Would you like to supersize that?",
    price: 0,
    multiplier: 0
  },
  {
    name: "Gigantic-Sized External Storage",
    description: "Impressive, but still not as big as the spiders from down unda.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Massive-Sized External Storage",
    description: "Large in quanity, and has a rockin personality.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Titanic-Sized External Storage",
    description: "The world’s best cloud storage service was released today, called Titanic. It’s always synching",
    price: 0,
    multiplier: 0
  },
  {
    name: "Colossal-Sized External Stroage",
    description: "Finally, something capable of storing the entire Avatar movie.",
    price: 0,
    multiplier: 0
  },
  {
    name: "Galactus-Sized External Storage",
    description: "Now this is an Avengers level threat!",
    price: 0,
    multiplier: 0
  },
  {
    name: "Infinite External Storage",
    description: "Your storage consists of nothing but a black hole tearing through time and space, but good work nonetheless!",
    price: 0,
    multiplier: 0
  },

]

export const GRAPHICSCARDUPGRADES: Upgrade[] = [
  {
    name: "8-Bit Graphics",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "16-Bit Graphics",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "32-Bit Graphics",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "64-Bit Graphics",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "HD Graphics",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "1080p-Level Graphics",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "2K-Level Graphics",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "4K-Level Graphics",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "8K-Level Graphics",
    description: "",
    price: 0,
    multiplier: 0
  },
  {
    name: "Virtual Reality",
    description: "",
    price: 0,
    multiplier: 0
  },

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
