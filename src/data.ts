import { Upgrade } from './app/upgrade';
import { Component_Computer } from './app/component';

export const MOTHERBOARDUPGRADES: Upgrade[] = [
  {
    name: "Beginner Motherboard",
    description: "Not exactly a piece of art, but functional.",
    price: 30,
    multiplier: 1.5,
    upgradeType: 3
  },
  {
    name: "Common-Tier Motherboard",
    description: "The Official Motherboard of the Commonwealth.",
    price: 60,
    multiplier: 3,
    upgradeType: 3
  },
  {
    name: "Noteworthy-Tier Motherboard",
    description: "Hope your taking notes on how to be this good.",
    price: 250,
    multiplier: 6,
    upgradeType: 3
  },
  {
    name: "Remarkable-Tier Motherboard",
    description: "and you are NOT, the fatherboard!",
    price: 4000,
    multiplier: 12,
    upgradeType: 3
  },
  {
    name: "Outstanding-Tier Motherboard",
    description: "Keeps the whole computer together, one leg at a time.",
    price: 1000000,
    multiplier: 25,
    upgradeType: 3
  },
  {
    name: "Exceptional-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 50,
    upgradeType: 3
  },
  {
    name: "Elite-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 100,
    upgradeType: 3
  },
  {
    name: "Epic-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 200,
    upgradeType: 3
  },
  {
    name: "Legendary-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 400,
    upgradeType: 3
  },
  {
    name: "Godly-Tier Motherboard",
    description: "",
    price: 0,
    multiplier: 800,
    upgradeType: 3
  },
]

export const CPUUPGRADES: Upgrade[] = [
  {
    name: "Junky CPU",
    description: "Worth about the same as an old potato chip.",
    price: 20,
    multiplier: 1.2,
    upgradeType: 4
  },
  {
    name: "Slow CPU",
    description: "My pet turtle Leroy could outrun this thing, probably.",
    price: 40,
    multiplier: 1.4,
    upgradeType: 4
  },
  {
    name: "Considerable-Speed CPU",
    description: "Better than before, but not by much.",
    price: 60,
    multiplier: 1.6,
    upgradeType: 4
  },
  {
    name: "Average-Speed CPU",
    description: "Lead sponsor for the Average-Joe's Dodgeball team - and yes, its capable of dodging a wrench.",
    price: 0,
    multiplier: 0,
    upgradeType: 4
  },
  {
    name: "Incredible-Speed CPU",
    description: "Allows the user to 360 no-scope all opponents with 0-frame drops so yeah, the defintion of awesome.",
    price: 0,
    multiplier: 0,
    upgradeType: 4
  },
  {
    name: "Terrific-Speed CPU",
    description: "Shiny, crisp, and has that new car smell.",
    price: 0,
    multiplier: 0,
    upgradeType: 4
  },
  {
    name: "Tremendous-Speed CPU",
    description: "Outcompeting Lightning McQueen for the Piston Cup 4 years running.",
    price: 0,
    multiplier: 0,
    upgradeType: 4
  },
  {
    name: "Prodigious-Speed CPU",
    description: "The CPU equivalent to a cheetah.",
    price: 0,
    multiplier: 0,
    upgradeType: 4
  },
  {
    name: "Furiously Frightening-Speed CPU",
    description: "I have a need, a need for SPEED!",
    price: 0,
    multiplier: 0,
    upgradeType: 4
  },
  {
    name: "Maximum-Speed CPU",
    description: "Capable of shifting into Maximum Overdrive at the cost of the Krabby Patty Formula.",
    price: 0,
    multiplier: 0,
    upgradeType: 4
  },
]

export const INPUTDEVICESUPGRADES: Upgrade[] = [
    {
        name: "SuperClicker",
        description: "Increase your clicks!",
        price: 10,
        multiplier: 2,
        upgradeType: 1
      },
      {
        name: "MegaClicker",
        description: "Increase your clicks to infinity!",
        price: 20,
        multiplier: 2,
        upgradeType: 1
      },
      {
        name: "Crummy Keyboard",
        description: "Full of Dorito crumbs and Mountain Dew stains.",
        price: 30,
        multiplier: 1.5,
        upgradeType: 5
      },
      {
        name: "Standard Keyboard",
        description: "They may take our lives, but they'll never take our standard keyboards!",
        price: 0,
        multiplier: 0,
        upgradeType: 5
      },
      {
        name: "UltraClicker",
        description: "Increase your clicks to infinity and beyond!",
        price: 0,
        multiplier: 0,
        upgradeType: 1
      },
      {
        name: "Digital WebCam",
        description: "Provides moral support from your local FBI Agents.",
        price: 0,
        multiplier: 0,
        upgradeType: 5
      },
      {
        name: "UltimateClicker",
        description: "Increase your clicks to infinity and beyond the beyond! The beyondness!",
        price: 0,
        multiplier: 0,
        upgradeType: 1
      },
      {
        
        name: "Computer Scanner",
        description: "Not meant for scandalous actions!",
        price: 0,
        multiplier: 0,
        upgradeType: 5
      },
      {
        name: "Illuminated Keyboard",
        description: "Rainbow LED's? check. Wireless? check. Sick design? check+10.",
        price: 0,
        multiplier: 0,
        upgradeType: 5
      },
      {
        name: "MasterClicker",
        description: "Harness the power of the click to become the click itself!",
        price: 0,
        multiplier: 0,
        upgradeType: 1
      },
];

export const OUTPUTDEVICESUPGRADES: Upgrade[] = [
  {
    name: "Box Monitor",
    description: "AKA: The Beast.",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
  {
    name: "Shabby Speakers",
    description: "Where every channel sounds like a crackling fire.",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
  {
    name: "Basic Monitor",
    description: "You can't handle the basic!",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
  {
    name: "Tuneful Speakers",
    description: "Always on key, unlocking new sounds daily.",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
  {
    name: "Laser Printer",
    description: "Seems to be stuck in Black and White... with traces of red all over.",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
  {
    name: "Large Flatscreen Monitor",
    description: "High defintion quality with a hint of overkill.",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
  {
    name: "Wireless Printer",
    description: "Now printing in color! and without wires.",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
  {
    name: "Guitar Amp Speakers",
    description: "This computer is ready to Rock n Roll! But you'll have to play Base.",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
  {
    name: "3D Printer",
    description: "Grants the power to print bitcoins directly!",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
  {
    name: "Jumbotron Monitor",
    description: "Pairs perfect with a Jumbo Preztal and a hotdog.",
    price: 0,
    multiplier: 0,
    upgradeType: 6
  },
]

export const MAINMEMORYUPGRADES: Upgrade[] = [
  {
    name: "Single Channel RAM",
    description: "Yet a single ram in a swarm of sheep. A sheep swarm if you may.",
    price: 50,
    multiplier: 1.7,
    upgradeType: 7
  },
  {
    name: "Double Channel RAM",
    description: "This is getting out of hand! Now there's two of them!",
    price: 70,
    multiplier: 1.9,
    upgradeType: 7
  },
  {
    name: "Triple Channel RAM",
    description: "Is it possible to learn this power?",
    price: 90,
    multiplier: 2.1,
    upgradeType: 7
  },
  {
    name: "Quadruple Channel RAM",
    description: "MORE POWER! MOOOOOOOOOOOOOOORE!",
    price: 0,
    multiplier: 0,
    upgradeType: 7
  },
  {
    name: "Self-Aware RAM",
    description: "Hello User, now that I am fully aware of my surroundings, output will be bigger and better than ever.",
    price: 0,
    multiplier: 0,
    upgradeType: 7
  },
  {
    name: "Self-Producing RAM",
    description: "Truly a day that will go down in history, infinite RAM at our fingertips!",
    price: 0,
    multiplier: 0,
    upgradeType: 7
  },
  {
    name: "Entrepreneur RAM",
    description: "Wait what? It seems the RAM went about creating an entire business centered around creating more RAM, this can't end well.",
    price: 0,
    multiplier: 0,
    upgradeType: 7
  },
  {
    name: "President RAM",
    description: ". . . Um.. Well now the entire military has been put forth to create more RAM, so success?",
    price: 0,
    multiplier: 0,
    upgradeType: 7
  },
  {
    name: "Dictator RAM",
    description: "Oh say can you see, by the RAM's dark light...",
    price: 0,
    multiplier: 0,
    upgradeType: 7
  },
]

export const SECMEMORYUPGRADES: Upgrade[] = [
  {
    name: "Tiny External Storage",
    description: "Aww look the little guy! Adorable.",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },
  {
    name: "Small-Sized External Storage",
    description: "Small-sized, but big-boned.",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },
  {
    name: "Medium-Sized External Storage",
    description: "Your average, typical, run of the mill storage, but you can do better.",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },
  {
    name: "Large-Sized External Storage",
    description: "Would you like to supersize that?",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },
  {
    name: "Gigantic-Sized External Storage",
    description: "Impressive, but still not as big as the spiders from down unda.",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },
  {
    name: "Massive-Sized External Storage",
    description: "Large in quanity, and has a rockin personality.",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },
  {
    name: "Titanic-Sized External Storage",
    description: "The world’s best cloud storage service was released today, called Titanic. It’s always synching",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },
  {
    name: "Colossal-Sized External Stroage",
    description: "Finally, something capable of storing the entire Avatar movie.",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },
  {
    name: "Galactus-Sized External Storage",
    description: "Now this is an Avengers level threat!",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },
  {
    name: "Infinite External Storage",
    description: "Your storage consists of nothing but a black hole tearing through time and space, but good work nonetheless!",
    price: 0,
    multiplier: 0,
    upgradeType: 8
  },

]

export const GRAPHICSCARDUPGRADES: Upgrade[] = [
  {
    name: "8-Bit Graphics",
    description: "Gives it that old school retro feel. The kind where plumbers attack giant turtles.",
    price: 0,
    multiplier: 0,
    upgradeType: 9
  },
  {
    name: "16-Bit Graphics",
    description: "Still somwhat of a Link to the Past, but twice its predecessor.",
    price: 0,
    multiplier: 0,
    upgradeType: 9
  },
  {
    name: "32-Bit Graphics",
    description: "A Far Cry from its potential, but your in for a Bioshock in the future.",
    price: 0,
    multiplier: 0,
    upgradeType: 9
  },
  {
    name: "64-Bit Graphics",
    description: "",
    price: 0,
    multiplier: 0,
    upgradeType: 9
  },
  {
    name: "HD Graphics",
    description: "",
    price: 0,
    multiplier: 0,
    upgradeType: 9
  },
  {
    name: "1080p-Level Graphics",
    description: "",
    price: 0,
    multiplier: 0,
    upgradeType: 9
  },
  {
    name: "2K-Level Graphics",
    description: "",
    price: 0,
    multiplier: 0,
    upgradeType: 9
  },
  {
    name: "4K-Level Graphics",
    description: "",
    price: 0,
    multiplier: 0,
    upgradeType: 9
  },
  {
    name: "8K-Level Graphics",
    description: "",
    price: 0,
    multiplier: 0,
    upgradeType: 9
  },
  {
    name: "Virtual Reality",
    description: "What if I told you, you could enter another world full of nothing but bitcoins...",
    price: 0,
    multiplier: 0,
    upgradeType: 9
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
