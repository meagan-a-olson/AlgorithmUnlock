import { Upgrade } from './app/upgrade';
import { Component_Computer } from './app/component';

export const MOTHERBOARDUPGRADES: Upgrade[] = [
  {
    name: "Beginner Motherboard",
    description: "Not exactly a piece of art, but functional.",
    price: 25,
    multiplier: 1.1,
    upgradeType: 3
  },
  {
    name: "Common-Tier Motherboard",
    description: "The Official Motherboard of the Commonwealth.",
    price: 40,
    multiplier: 1.2,
    upgradeType: 3
  },
  {
    name: "Noteworthy-Tier Motherboard",
    description: "Hope you're taking notes on how to be this good.",
    price: 60,
    multiplier: 1.3,
    upgradeType: 3
  },
  {
    name: "Remarkable-Tier Motherboard",
    description: "...and you are NOT- the fatherboard!",
    price: 150,
    multiplier: 1.4,
    upgradeType: 3
  },
  {
    name: "Outstanding-Tier Motherboard",
    description: "Keeps the whole computer together, one leg at a time.",
    price: 800,
    multiplier: 1.5,
    upgradeType: 3
  },
  {
    name: "Exceptional-Tier Motherboard",
    description: "Maybe it'll take you to the mothership.",
    price: 15000,
    multiplier: 1.6,
    upgradeType: 3
  },
  {
    name: "Elite-Tier Motherboard",
    description: "...but we do not grant you the rank of Master.",
    price: 2500000,
    multiplier: 1.7,
    upgradeType: 3
  },
  {
    name: "Epic-Tier Motherboard",
    description: "Duuuuuuuude. Epic.",
    price: 18000000000,
    multiplier: 1.8,
    upgradeType: 3
  },
  {
    name: "Legendary-Tier Motherboard",
    description: "Wait for it.",
    price: 1000000000000000, // Restricted
    multiplier: 1.9,
    upgradeType: 3
  },
  {
    name: "Godly-Tier Motherboard",
    description: "Amen.",
    price: 1000000000000000, // Restricted
    multiplier: 2,
    upgradeType: 3
  },
]

export const CPUUPGRADES: Upgrade[] = [
  {
    name: "Junky CPU",
    description: "Worth about the same as an old potato chip.",
    price: 130,
    multiplier: 1.2,
    upgradeType: 4
  },
  {
    name: "Slow CPU",
    description: "My pet turtle Leroy could outrun this thing, probably.",
    price: 200,
    multiplier: 1.3,
    upgradeType: 4
  },
  {
    name: "Considerable-Speed CPU",
    description: "Better than before, but not by much.",
    price: 380,
    multiplier: 1.4,
    upgradeType: 4
  },
  {
    name: "Average-Speed CPU",
    description: "Lead sponsor for the Average-Joe's Dodgeball team - and yes, it's capable of dodging a wrench.",
    price: 1000,
    multiplier: 1.5,
    upgradeType: 4
  },
  {
    name: "Incredible-Speed CPU",
    description: "Allows the user to 360 no-scope all opponents with 0-frame drops so yeah, the defintion of awesome.",
    price: 5250,
    multiplier: 1.6,
    upgradeType: 4
  },
  {
    name: "Terrific-Speed CPU",
    description: "Shiny, crisp, and has that new car smell.",
    price: 100000,
    multiplier: 1.7,
    upgradeType: 4
  },
  {
    name: "Tremendous-Speed CPU",
    description: "Outcompeting Lightning McQueen for the Piston Cup 4 years running.",
    price: 17000000,
    multiplier: 1.8,
    upgradeType: 4
  },
  {
    name: "Prodigious-Speed CPU",
    description: "It's all about the Pentiums, baby.",
    price: 128000000000,
    multiplier: 1.9,
    upgradeType: 4
  },
  {
    name: "Furiously Frightening-Speed CPU",
    description: "I have a need, a need for SPEED!",
    price: 1000000000000000, // Restricted
    multiplier: 2,
    upgradeType: 4
  },
  {
    name: "Maximum-Speed CPU",
    description: "Capable of shifting into Maximum Overdrive at the cost of the Krabby Patty Formula.",
    price: 1000000000000000, // Restricted
    multiplier: 2.1,
    upgradeType: 4
  },
]

export const INPUTDEVICESUPGRADES: Upgrade[] = [
    {
        name: "SuperClicker",
        description: "Increase your clicks!",
        price: 630,
        multiplier: 1.5,
        upgradeType: 1
      },
      {
        name: "MegaClicker",
        description: "Increase your clicks to infinity!",
        price: 900,
        multiplier: 2,
        upgradeType: 1
      },
      {
        name: "Crummy Keyboard",
        description: "Full of Dorito crumbs and Mountain Dew stains.",
        price: 1500,
        multiplier: 1.5,
        upgradeType: 5
      },
      {
        name: "Standard Keyboard",
        description: "They may take our lives, but they'll never take our standard keyboards!",
        price: 4000,
        multiplier: 1.6,
        upgradeType: 5
      },
      {
        name: "UltraClicker",
        description: "Increase your clicks to infinity and beyond!",
        price: 21000,
        multiplier: 3,
        upgradeType: 1
      },
      {
        name: "Digital WebCam",
        description: "Provides moral support from your local FBI agents.",
        price: 400000,
        multiplier: 1.8,
        upgradeType: 5
      },
      {
        name: "UltimateClicker",
        description: "Increase your clicks to infinity and beyond the beyond! The beyondness!",
        price: 60000000,
        multiplier: 4,
        upgradeType: 1
      },
      {
        
        name: "Computer Scanner",
        description: "Not meant for scandalous actions!",
        price: 500000000000,
        multiplier: 2,
        upgradeType: 5
      },
      {
        name: "Illuminated Keyboard",
        description: "Rainbow LED's? Check. Wireless? Check. Sick design? Check+10.",
        price: 1000000000000000, // Restricted
        multiplier: 2.1,
        upgradeType: 5
      },
      {
        name: "MasterClicker",
        description: "Harness the power of the click to become the click itself!",
        price: 1000000000000000, // Restricted
        multiplier: 5,
        upgradeType: 1
      },
];

export const OUTPUTDEVICESUPGRADES: Upgrade[] = [
  {
    name: "Box Monitor",
    description: "AKA The Beast.",
    price: 1170,
    multiplier: 1.4,
    upgradeType: 6
  },
  {
    name: "Shabby Speakers",
    description: "Where every channel sounds like a crackling fire.",
    price: 1700,
    multiplier: 1.5,
    upgradeType: 6
  },
  {
    name: "Basic Monitor",
    description: "You can't handle the basic!",
    price: 3000,
    multiplier: 1.6,
    upgradeType: 6
  },
  {
    name: "Tuneful Speakers",
    description: "Always on key, unlocking new sounds daily.",
    price: 7500,
    multiplier: 1.7,
    upgradeType: 6
  },
  {
    name: "Laser Printer",
    description: "Seems to be stuck in Black and White... with traces of red all over.",
    price: 40000,
    multiplier: 1.8,
    upgradeType: 6
  },
  {
    name: "Large Flatscreen Monitor",
    description: "High definition quality with a hint of overkill.",
    price: 750000,
    multiplier: 1.9,
    upgradeType: 6
  },
  {
    name: "Wireless Printer",
    description: "Now printing in color! (And without wires.)",
    price: 125000000,
    multiplier: 2,
    upgradeType: 6
  },
  {
    name: "Guitar Amp Speakers",
    description: "This computer is ready to Rock 'n' Roll! But you'll have to play bass.",
    price: 960000000000,
    multiplier: 2.1,
    upgradeType: 6
  },
  {
    name: "3D Printer",
    description: "Grants the power to print bitcoins directly!",
    price: 1000000000000000, // Restricted
    multiplier: 2.2,
    upgradeType: 6
  },
  {
    name: "Jumbotron Monitor",
    description: "Pairs perfect with a Jumbo Preztel and a hotdog.",
    price: 1000000000000000, // Restricted
    multiplier: 2.3,
    upgradeType: 6
  },
]

export const MAINMEMORYUPGRADES: Upgrade[] = [
  {
    name: "Single Channel RAM",
    description: "But a single ram in a swarm of sheep. A sheep swarm, if you may.",
    price: 3105,
    multiplier: 1.5,
    upgradeType: 7
  },
  {
    name: "Double Channel RAM",
    description: "This is getting out of hand! Now there are two of them!",
    price: 4400,
    multiplier: 1.6,
    upgradeType: 7
  },
  {
    name: "Triple Channel RAM",
    description: "Is it possible to learn this power?",
    price: 7500,
    multiplier: 1.7,
    upgradeType: 7
  },
  {
    name: "Quadruple Channel RAM",
    description: "MORE POWER! MOOOOOOOOOOOOOOORE!",
    price: 20000,
    multiplier: 1.8,
    upgradeType: 7
  },
  {
    name: "Self-Aware RAM",
    description: "Hello User, now that I am fully aware of my surroundings, output will be bigger and better than ever.",
    price: 105000,
    multiplier: 1.9,
    upgradeType: 7
  },
  {
    name: "Self-Producing RAM",
    description: "Truly a day that will go down in history. Infinite RAM at our fingertips!",
    price: 2000000,
    multiplier: 2,
    upgradeType: 7
  },
  {
    name: "Entrepreneur RAM",
    description: "Wait, what? It seems the RAM went about creating an entire business to create more RAM. This can't end well.",
    price: 335000000,
    multiplier: 2.1,
    upgradeType: 7
  },
  {
    name: "President RAM",
    description: "... Um... Well, now the entire military has been put forth to create more RAM, so success?",
    price: 2000000000000,
    multiplier: 2.2,
    upgradeType: 7
  },
  {
    name: "Dictator RAM",
    description: "Oh say can you see, by the RAM's dark light...",
    price: 1000000000000000, // Restricted
    multiplier: 2.3,
    upgradeType: 7
  },
  {
    name: "Supreme Leader RAM",
    description: "You have too much of your father's heart in you, young RAM.",
    price: 1000000000000000, // Restricted
    multiplier: 2.4,
    upgradeType: 7
  },
]

export const SECMEMORYUPGRADES: Upgrade[] = [
  {
    name: "Tiny External Storage",
    description: "Aww, look the little guy! Adorable.",
    price: 7800,
    multiplier: 1.6,
    upgradeType: 8
  },
  {
    name: "Small-Sized External Storage",
    description: "Small-sized, but big-boned.",
    price: 11000,
    multiplier: 1.7,
    upgradeType: 8
  },
  {
    name: "Medium-Sized External Storage",
    description: "Your average, typical, run of the mill storage, but you can do better.",
    price: 19000,
    multiplier: 1.8,
    upgradeType: 8
  },
  {
    name: "Large-Sized External Storage",
    description: "Would you like to supersize that?",
    price: 50000,
    multiplier: 1.9,
    upgradeType: 8
  },
  {
    name: "Gigantic-Sized External Storage",
    description: "Impressive, but still not as big as the spiders from down unda.",
    price: 265000,
    multiplier: 2,
    upgradeType: 8
  },
  {
    name: "Massive-Sized External Storage",
    description: "Large in quantity, and has a rockin' personality.",
    price: 5000000,
    multiplier: 2.1,
    upgradeType: 8
  },
  {
    name: "Titanic-Sized External Storage",
    description: "The world’s best cloud storage service was released today, called Titanic. It’s always syncing",
    price: 850000000,
    multiplier: 2.2,
    upgradeType: 8
  },
  {
    name: "Colossal-Sized External Storage",
    description: "Finally, something capable of storing the entire Avatar movie.",
    price: 6000000000000,
    multiplier: 2.3,
    upgradeType: 8
  },
  {
    name: "Galactus-Sized External Storage",
    description: "Now, this is an Avengers-level threat!",
    price: 1000000000000000, // Restricted
    multiplier: 2.4,
    upgradeType: 8
  },
  {
    name: "Infinite External Storage",
    description: "Your storage consists of nothing but a black hole tearing through time and space, but good work nonetheless!",
    price: 1000000000000000, // Restricted
    multiplier: 2.5,
    upgradeType: 8
  },

]

export const GRAPHICSCARDUPGRADES: Upgrade[] = [
  {
    name: "8-Bit Graphics",
    description: "Gives it that old school retro feel. The kind where plumbers attack giant turtles.",
    price: 15600,
    multiplier: 1.7,
    upgradeType: 9
  },
  {
    name: "16-Bit Graphics",
    description: "Still something of a Link to the Past, but twice its predecessor.",
    price: 22000,
    multiplier: 1.8,
    upgradeType: 9
  },
  {
    name: "32-Bit Graphics",
    description: "A Far Cry from its potential, but you're in for a Bioshock in the future.",
    price: 38000,
    multiplier: 1.9,
    upgradeType: 9
  },
  {
    name: "64-Bit Graphics",
    description: "In the Call of Duty, no one wants the Shadow of War.",
    price: 100000,
    multiplier: 2,
    upgradeType: 9
  },
  {
    name: "HD Graphics",
    description: "Finally, I can watch Star Wars in high definition!",
    price: 521000,
    multiplier: 2.1,
    upgradeType: 9
  },
  {
    name: "1080p-Level Graphics",
    description: "Almost... there...",
    price: 10000000,
    multiplier: 2.2,
    upgradeType: 9
  },
  {
    name: "2K-Level Graphics",
    description: "Is anyone even reading these at this point?",
    price: 1700000000,
    multiplier: 2.3,
    upgradeType: 9
  },
  {
    name: "4K-Level Graphics",
    description: "Isn't that neat? Now that's pretty neat.",
    price: 12000000000000,
    multiplier: 2.4,
    upgradeType: 9
  },
  {
    name: "8K-Level Graphics",
    description: "We're reaching levels of eyesight that shouldn't be possible.",
    price: 1000000000000000, // Restricted
    multiplier: 2.5,
    upgradeType: 9
  },
  {
    name: "Virtual Reality",
    description: "What if I told you, you could enter another world full of nothing but bitcoins...",
    price: 1000000000000000, // Restricted
    multiplier: 2.6,
    upgradeType: 9
  },
]
