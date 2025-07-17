// src/data/teams.js
import redbull from "./assets/images/redbull.jpg"
import mercedes from "./assets/images/mercedes.jpg"

import ferrari from "./assets/images/ferrari.jpg"
import mclaren from "./assets/images/mclaren.jpg"


import astonmartin from "./assets/images/astonmartin.jpg"
import alpine from "./assets/images/alpine.jpg"

import williams from "./assets/images/williams.jpg"
import visab from "./assets/images/visarb.jpg"


import sauber from "./assets/images/sauber.jpg"


import haas from "./assets/images/haas.jpg"
const teams = [
  {
    id: "redbull",
    name: "Red Bull Racing",
    drivers: ["Max Verstappen", "Sergio Pérez"],
    image: redbull,
    description: "Red Bull Racing is the dominant force in recent years, led by three-time world champion Max Verstappen.",
    teamArr: [
      {
        year: 2023,
        engine: "Honda RA623H 1.6 V6 turbocharged",
        drivers: ["Max Verstappen", "Sergio Pérez"],
        points: 860,
        position: "1st place"
      },
      {
        year: 2022,
        engine: "Honda RA622H 1.6 V6 turbocharged",
        drivers: ["Max Verstappen", "Sergio Pérez"],
        points: 656,
        position: "2nd place"
      },
      {
        year: 2021,
        engine: "Honda RA621H 1.6 V6 turbocharged",
        drivers: ["Max Verstappen", "Sergio Pérez"],
        points: 668,
        position: "2nd place"
      },
      {
        year: 2020,
        engine: "Honda RA620H 1.6 V6 turbocharged",
        drivers: ["Max Verstappen", "Alexander Albon"],
        points: 319,
        position: "3rd place"
      },
      {
        year: 2019,
        engine: "Honda RA619H 1.6 V6 turbocharged",
        drivers: ["Max Verstappen", "Pierre Gasly"],
        points: 417,
        position: "3rd place"
      },
      {
        year: 2018,
        engine: "Renault R.E.18 1.6 V6 turbocharged",
        drivers: ["Daniel Ricciardo", "Max Verstappen"],
        points: 419,
        position: "4th place"
      }
    ]
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG Petronas",
    drivers: ["Lewis Hamilton", "George Russell"],
    image: mercedes,
    description: "Mercedes dominated the hybrid era with multiple championships, with Lewis Hamilton at the forefront.",
    teamArr: [
      {
        year: 2023,
        engine: "Mercedes-AMG M13 E Performance 1.6 V6 turbocharged",
        drivers: ["Lewis Hamilton", "George Russell"],
        points: 569,
        position: "3rd place"
      },
      {
        year: 2022,
        engine: "Mercedes-AMG M13 E Performance 1.6 V6 turbocharged",
        drivers: ["Lewis Hamilton", "George Russell"],
        points: 840,
        position: "2nd place"
      },
      {
        year: 2021,
        engine: "Mercedes-AMG M12 E Performance 1.6 V6 turbocharged",
        drivers: ["Lewis Hamilton", "Valtteri Bottas"],
        points: 613,
        position: "2nd place"
      },
      {
        year: 2020,
        engine: "Mercedes-AMG M11 E Performance 1.6 V6 turbocharged",
        drivers: ["Lewis Hamilton", "Valtteri Bottas"],
        points: 573,
        position: "1st place"
      },
      {
        year: 2019,
        engine: "Mercedes-AMG M10 E Performance 1.6 V6 turbocharged",
        drivers: ["Lewis Hamilton", "Valtteri Bottas"],
        points: 739,
        position: "1st place"
      },
      {
        year: 2018,
        engine: "Mercedes-AMG M09 E Performance 1.6 V6 turbocharged",
        drivers: ["Lewis Hamilton", "Valtteri Bottas"],
        points: 655,
        position: "1st place"
      }
    ]
  },
  {
    id: "ferrari",
    name: "Scuderia Ferrari",
    drivers: ["Charles Leclerc", "Carlos Sainz"],
    image: ferrari,
    description: "Ferrari is F1's most historic team, still chasing another world title with their talented driver duo.",
    teamArr: [
      {
        year: 2023,
        engine: "Ferrari 066/10 1.6 V6 turbocharged",
        drivers: ["Charles Leclerc", "Carlos Sainz"],
        points: 502,
        position: "4th place"
      },
      {
        year: 2022,
        engine: "Ferrari 066/7 1.6 V6 turbocharged",
        drivers: ["Charles Leclerc", "Carlos Sainz"],
        points: 554,
        position: "6th place"
      },
      {
        year: 2021,
        engine: "Ferrari 065/6 1.6 V6 turbocharged",
        drivers: ["Charles Leclerc", "Carlos Sainz"],
        points: 323,
        position: "5th place"
      },
      {
        year: 2020,
        engine: "Ferrari 065/5 1.6 V6 turbocharged",
        drivers: ["Charles Leclerc", "Sebastian Vettel"],
        points: 131,
        position: "6th place"
      },
      {
        year: 2019,
        engine: "Ferrari 064/6 1.6 V6 turbocharged",
        drivers: ["Charles Leclerc", "Sebastian Vettel"],
        points: 469,
        position: "4th place"
      },
      {
        year: 2018,
        engine: "Ferrari 064/5 1.6 V6 turbocharged",
        drivers: ["Sebastian Vettel", "Kimi Räikkönen"],
        points: 571,
        position: "2nd place"
      }
    ]
  },
  {
    id: "mclaren",
    name: "McLaren F1 Team",
    drivers: ["Lando Norris", "Oscar Piastri"],
    image: mclaren,
    description: "McLaren has made a strong comeback in recent years, thanks to its young driver lineup.",
    teamArr: [
      {
        year: 2023,
        engine: "Mercedes-AMG M13 E Performance 1.6 V6 turbocharged",
        drivers: ["Lando Norris", "Oscar Piastri"],
        points: 222,
        position: "8th place"
      },
      {
        year: 2022,
        engine: "Mercedes-AMG M13 E Performance 1.6 V6 turbocharged",
        drivers: ["Daniel Ricciardo", "Lando Norris"],
        points: 159,
        position: "6th place"
      },
      {
        year: 2021,
        engine: "Mercedes-AMG M12 E Performance 1.6 V6 turbocharged",
        drivers: ["Daniel Ricciardo", "Lando Norris"],
        points: 275,
        position: "3rd place"
      },
      {
        year: 2020,
        engine: "Mercedes-AMG M11 E Performance 1.6 V6 turbocharged",
        drivers: ["Carlos Sainz Jr.", "Lando Norris"],
        points: 202,
        position: "3rd place"
      },
      {
        year: 2019,
        engine: "Renault E-Tech 19 1.6 V6 turbocharged",
        drivers: ["Carlos Sainz Jr.", "Lando Norris"],
        points: 96,
        position: "6th place"
      },
      {
        year: 2018,
        engine: "Renault E-Tech 18 1.6 V6 turbocharged",
        drivers: ["Fernando Alonso", "Stoffel Vandoorne"],
        points: 62,
        position: "9th place"
      }
    ]
  },
  {
    id: "astonmartin",
    name: "Aston Martin Aramco",
    drivers: ["Fernando Alonso", "Lance Stroll"],
    image: astonmartin,
    description: "Aston Martin stunned the grid in 2023 with impressive podiums, led by veteran Alonso.",
    teamArr: [
      {
        year: 2023,
        engine: "Mercedes-AMG M13 E Performance 1.6 V6 turbocharged",
        drivers: ["Fernando Alonso", "Lance Stroll"],
        points: 280,
        position: "5th place"
      },
      {
        year: 2022,
        engine: "Mercedes-AMG M13 E Performance 1.6 V6 turbocharged",
        drivers: ["Sebastian Vettel", "Lance Stroll"],
        points: 84,
        position: "9th place"
      },
      {
        year: 2021,
        engine: "Mercedes-AMG M12 E Performance 1.6 V6 turbocharged",
        drivers: ["Sebastian Vettel", "Lance Stroll"],
        points: 136,
        position: "7th place"
      },
      {
        year: 2020,
        engine: "Mercedes-AMG M11 E Performance 1.6 V6 turbocharged",
        drivers: ["Lance Stroll", "Sergio Pérez"],
        points: 19,
        position: "10th place"
      },
      {
        year: 2019,
        engine: "Renault E-Tech 19 1.6 V6 turbocharged",
        drivers: ["Lance Stroll", "Piero Gasly"],
        points: 73,
        position: "7th place"
      },
      {
        year: 2018,
        engine: "Renault E-Tech 18 1.6 V6 turbocharged",
        drivers: ["Lance Stroll", "Sergey Sirotkin"],
        points: 6,
        position: "10th place"
      }
    ]
  },
  {
    id: "alpine",
    name: "BWT Alpine F1 Team",
    drivers: ["Esteban Ocon", "Pierre Gasly"],
    image: alpine,
    description: "Alpine represents French racing spirit and continues to aim for top midfield results.",
    teamArr: [
      {
        year: 2023,
        engine: "Renault E-Tech 23 1.6 V6 turbocharged",
        drivers: ["Esteban Ocon", "Pierre Gasly"],
        points: 91,
        position: "8th place"
      },
      {
        year: 2022,
        engine: "Renault E-Tech 22 1.6 V6 turbocharged",
        drivers: ["Fernando Alonso", "Esteban Ocon"],
        points: 81,
        position: "8th place"
      },
      {
        year: 2021,
        engine: "Renault E-Tech 21 1.6 V6 turbocharged",
        drivers: ["Fernando Alonso", "Esteban Ocon"],
        points: 155,
        position: "5th place"
      },
      {
        year: 2020,
        engine: "Renault E-Tech 20 1.6 V6 turbocharged",
        drivers: ["Daniel Ricciardo", "Esteban Ocon"],
        points: 181,
        position: "5th place"
      },
      {
        year: 2019,
        engine: "Renault E-Tech 19 1.6 V6 turbocharged",
        drivers: ["Daniel Ricciardo", "Nico Hülkenberg"],
        points: 91,
        position: "6th place"
      },
      {
        year: 2018,
        engine: "Renault E-Tech 18 1.6 V6 turbocharged",
        drivers: ["Nico Hülkenberg", "Carlos Sainz Jr."],
        points: 122,
        position: "5th place"
      }
    ]
  },
  {
    id: "williams",
    name: "Williams Racing",
    drivers: ["Alex Albon", "Logan Sargeant"],
    image: williams,
    description: "One of the most storied teams in F1 history, Williams is rebuilding with a fresh lineup.",
    teamArr: [
      {
        year: 2023,
        engine: "Mercedes-AMG M13 E Performance 1.6 V6 turbocharged",
        drivers: ["Alex Albon", "Logan Sargeant"],
        points: 28,
        position: "10th place"
      },
      {
        year: 2022,
        engine: "Mercedes-AMG M13 E Performance 1.6 V6 turbocharged",
        drivers: ["Nicholas Latifi", "Alexander Albon"],
        points: 23,
        position: "10th place"
      },
      {
        year: 2021,
        engine: "Mercedes-AMG M12 E Performance 1.6 V6 turbocharged",
        drivers: ["George Russell", "Nicholas Latifi"],
        points: 23,
        position: "9th place"
      },
      {
        year: 2020,
        engine: "Mercedes-AMG M11 E Performance 1.6 V6 turbocharged",
        drivers: ["George Russell", "Nicholas Latifi"],
        points: 1,
        position: "9th place"
      },
      {
        year: 2019,
        engine: "Mercedes-AMG M10 E Performance 1.6 V6 turbocharged",
        drivers: ["Robert Kubica", "George Russell"],
        points: 1,
        position: "10th place"
      },
      {
        year: 2018,
        engine: "Mercedes-AMG M09 E Performance 1.6 V6 turbocharged",
        drivers: ["Lance Stroll", "Sergey Sirotkin"],
        points: 7,
        position: "10th place"
      }
    ]
  },
  {
    id: "visa-rb",
    name: "Visa Cash App RB",
    drivers: ["Yuki Tsunoda", "Daniel Ricciardo"],
    image: visab,
    description: "Previously AlphaTauri, RB is Red Bull's sister team, balancing youth and experience.",
    teamArr: [
      {
        year: 2023,
        engine: "Honda RA623H 1.6 V6 turbocharged",
        drivers: ["Yuki Tsunoda", "Daniel Ricciardo"],
        points: 135,
        position: "9th place"
      },
      {
        year: 2022,
        engine: "Honda RA622H 1.6 V6 turbocharged",
        drivers: ["Pierre Gasly", "Yuki Tsunoda"],
        points: 111,
        position: "7th place"
      },
      {
        year: 2021,
        engine: "Honda RA621H 1.6 V6 turbocharged",
        drivers: ["Pierre Gasly", "Yuki Tsunoda"],
        points: 142,
        position: "6th place"
      },
      {
        year: 2020,
        engine: "Honda RA620H 1.6 V6 turbocharged",
        drivers: ["Pierre Gasly", "Daniil Kvyat"],
        points: 107,
        position: "9th place"
      },
      {
        year: 2019,
        engine: "Honda RA619H 1.6 V6 turbocharged",
        drivers: ["Pierre Gasly", "Daniil Kvyat"],
        points: 92,
        position: "6th place"
      },
      {
        year: 2018,
        engine: "Renault R.E.18 1.6 V6 turbocharged",
        drivers: ["Pierre Gasly", "Brendon Hartley"],
        points: 33,
        position: "9th place"
      }
    ]
  },
    {
    id: "kick-sauber",
    name: "Stake F1 Team Kick Sauber",
    drivers: ["Valtteri Bottas", "Zhou Guanyu"],
    image: sauber,
    description: "Sauber is in transition to become Audi's works team, with solid experience on the grid.",
    teamArr: [
      {
        year: 2023,
        engine: "Ferrari 066/10 1.6 V6 turbocharged",
        drivers: ["Valtteri Bottas", "Zhou Guanyu"],
        points: 19,
        position: "10th place"
      },
      {
        year: 2022,
        engine: "Ferrari 066/7 1.6 V6 turbocharged",
        drivers: ["Robert Kubica", "Guanyu Zhou"],
        points: 5,
        position: "10th place"
      },
      {
        year: 2021,
        engine: "Ferrari 065/6 1.6 V6 turbocharged",
        drivers: ["Kimi Räikkönen", "Antonio Giovinazzi"],
        points: 10,
        position: "10th place"
      },
      {
        year: 2020,
        engine: "Ferrari 065/5 1.6 V6 turbocharged",
        drivers: ["Kimi Räikkönen", "Antonio Giovinazzi"],
        points: 8,
        position: "10th place"
      },
      {
        year: 2019,
        engine: "Ferrari 064/6 1.6 V6 turbocharged",
        drivers: ["Charles Leclerc", "Marcus Ericsson"],
        points: 48,
        position: "8th place"
      },
      {
        year: 2018,
        engine: "Ferrari 064/5 1.6 V6 turbocharged",
        drivers: ["Charles Leclerc", "Marcus Ericsson"],
        points: 93,
        position: "7th place"
      }
    ]
  },
  {
    id: "haas",
    name: "MoneyGram Haas F1 Team",
    drivers: ["Kevin Magnussen", "Nico Hülkenberg"],
    image: haas,
    description: "Haas continues its journey as the sole American-owned F1 team, always fighting in the midfield.",
    teamArr: [
      {
        year: 2023,
        engine: "Ferrari 066/10 1.6 V6 turbocharged",
        drivers: ["Kevin Magnussen", "Nico Hülkenberg"],
        points: 12,
        position: "10th place"
      },
      {
        year: 2022,
        engine: "Ferrari 066/7 1.6 V6 turbocharged",
        drivers: ["Mick Schumacher", "Nico Hülkenberg"],
        points: 37,
        position: "9th place"
      },
      {
        year: 2021,
        engine: "Ferrari 065/6 1.6 V6 turbocharged",
        drivers: ["Mick Schumacher", "Nikita Mazepin"],
        points: 0,
        position: "10th place"
      },
      {
        year: 2020,
        engine: "Ferrari 065/5 1.6 V6 turbocharged",
        drivers: ["Romain Grosjean", "Kevin Magnussen"],
        points: 10,
        position: "9th place"
      },
      {
        year: 2019,
        engine: "Ferrari 064/6 1.6 V6 turbocharged",
        drivers: ["Romain Grosjean", "Kevin Magnussen"],
        points: 9,
        position: "9th place"
      },
      {
        year: 2018,
        engine: "Ferrari 064/5 1.6 V6 turbocharged",
        drivers: ["Romain Grosjean", "Kevin Magnussen"],
        points: 47,
        position: "9th place"
      }
    ]
  }
];

export default teams;
