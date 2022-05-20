interface Club {
  locationId: string;
  id: number;
  name: string;
  street: string;
  city: string;
  latLong: number[];
}

const clubs: Array<Club> = [
  {
    locationId: "a0041000005WyC3AAK",
    id: 6,
    name: "SF Embarcadero",
    street: "2 Embarcadero Ctr",
    city: "San Francisco",
    latLong: [37.7949995,-122.4006789],
  },
  {
    locationId: "a0041000005WyByAAK",
    id: 5,
    name: "SF Castro",
    street: "2301 Market Street",
    city: "San Francisco",
    latLong: [37.763643,-122.4354498],
  },
  {
    locationId: "a00410000039f03AAA",
    id: 1,
    name: "Marin",
    street: "10 Fifer Avenue",
    city: "Corte Madera",
    latLong: [37.938468,-122.5181084],
  },
  {
    locationId: "a0041000005WyBtAAK",
    id: 4,
    name: "Oakland",
    street: "600 Grand Avenue",
    city: "Oakland",
    latLong: [37.8096579,-122.2497913],
  },
  {
    locationId: "a002M00000wKcdPQAS",
    id: 9,
    name: "SF Transbay",
    street: "425 Mission Street",
    city: "San Francisco",
    latLong: [37.7893809,-122.3988267],
  },
  {
    locationId: "a0041000005WyCDAA0",
    id: 2,
    name: "SF Fillmore",
    street: "1455 Fillmore Street",
    city: "San Francisco",
    latLong: [37.7821639,-122.4348897],
  },
  {
    locationId: "a0041000005WyCNAA0",
    id: 8,
    name: "SF SOMA",
    street: "1001 Brannan Street",
    city: "San Francisco",
    latLong: [37.7695957,-122.4091836],
  },
  {
    locationId: "a0041000005WyCIAA0",
    id: 7,
    name: "SF Mid Market",
    street: "1 10th Street",
    city: "San Francisco",
    latLong: [37.7763676,-122.4185199],
  },
];

export { clubs, Club };