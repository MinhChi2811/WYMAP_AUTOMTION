// src/test-data/randomJobData.ts

type JobDataByCity = {
  customer: string[],
  cto: string[],
  driver: string[]
};

const jobData: Record<string, JobDataByCity> = {
  "Sydney": {
    customer: ["DGF Perishables Sydney", "RFS - Kuehne & Nagel Pty Ltd", "DB Schenker", "ChiP Sydney", "MtestSydney", "Toll Global Forwarding Sydney", "FedEx Express - Sydney", "Bollore Sydney", "CT Freight - Sydney", "DHL Express - Sydney", "Sydney Training Account" ],
    cto: ["CTO Tuyen Test", "Qantas T3 Canyard", "Menzies Canyard", "Dnata Canyard", "Sydney Yard (Rockdale)", "Sydney Yard (Mascot)", "Test112233", "Daisy", "Qantas - cargorise", "Green Inc", "CTO909090", "Qantas T3", "Adelaide Airport", "ARI-CTO", "Chi1", "ARI-CTO-Menzies", "Chi12345","SyneyTest1", "Sydney123", "REGRESSION-3.988888", "Qantas T1 Canyard", "Dnata T2", "Dnata T1", "Menzies T2","Menzies T1","Menzies T0",],
    driver: ["Tester 2", "foundU Test Driver", "Chi", "Name 1", "Chi Sydney - driver", "ChiP Sydney", "Thermoking Driver", "Chi 2 SYD","Chi 3 SYD", "Interstate Driver 1", "Interstate Driver 2" ]
  }
//   "Melbourne": {
//     customer: [],
//     cto: ["AMI", "JETS", "Menzie", "Chi CTO", "Chi CTOMel", "Moon", "Qantas", "Riffpath 2", "Dnata", "Menzies" ],
//     driver: []
//   },
//   "Brisbane": {
//     customer: ["FedEx", "CEVA Logistics", "Mainfreight", "ChiP Brisbane "],
//     cto: ["Qantas", "Menzies", "Dnata", "Brisbane1", "Sun CTO", "CABC", "CTO000", "Strong", "(3450K) Brisbane CTO", "Brisbane01", "HCJFGHV", "CHI CTO Brisbane", "[1]614450"],
//     driver: []
//   },
//   "Auckland":{
//     customer: ["ChiP Auckland"],
//     cto: ["Menzies (Imports Loose Only)", "Air NZ (Building 1 - Export and National Terminal)","Air NZ Can Park", "Menzies Can Park","Tasman Can Park", "Hamilton DHL", "Uniloade", "Air NZ (Building 4 - Import Terminal)", "Wymap Yard (Māngere)", "Menzies", "Swissport Airside", "CTO0009"],
//     driver: []
//   },
//   "Perth": {
//     customer:[],
//     cto:["BD CTO", "Perth1", "Dnata 122"],
//     driver:[]
//   },
//   "Adelaide":{
//     customer:[],
//     cto:["SA"],
//     driver:[]
//   },
//   "Sydney Test Only": {
//     customer:["Dnata Canyard", "Outcomes 1", "Qantas T1", "Qantas T3", "Sydney Yard (Mascot)", "Qantas Domestic2", "Sydney Yard (Rockdale)", "Qantas EHU", "Menzies T0", "Menzies Canyard"],
//     cto:[],
//     driver:[]
//   }

};

export const cargoTypes = ["ULD", "Loose"];
export const jobTypes = ["Import", "Export", "Temp Control"];
export const pickupAddresses = [
  "10 George St, Sydney NSW 2000, Australia",
  "25 Swanston St, Melbourne VIC 3000, Australia",
  "35 Queen St, Brisbane QLD 4000, Australia"
];
export const dropoffAddresses = [
  "88 Elizabeth St, Sydney NSW 2000, Australia",
  "50 Collins St, Melbourne VIC 3000, Australia",
  "100 Adelaide St, Brisbane QLD 4000, Australia"
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateRandomJobData() {
  const city = getRandomElement(Object.keys(jobData));
  const details = jobData[city];

  return {
    city,
    customer: getRandomElement(details.customer),
    cto: getRandomElement(details.cto),
    driver: getRandomElement(details.driver),
    cargoType: getRandomElement(cargoTypes),
    jobType: getRandomElement(jobTypes),
    requesterName: "AutoTest User",
    pickupAddress: getRandomElement(pickupAddresses),
    dropoffAddress: getRandomElement(dropoffAddresses),
    jobDescription: "Job created via automation test."
  };
}
