export class Company {
  name: string;
  headquarters: Partial<Address>;
  type: string;
  industry: string;
  areaServed: string;
  website: string;
}

export class Address {
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export class Position {
  title: string;
  description: string;
}

export class Experience {
  positions: Partial<Position>[];
  company: Partial<Company>;
  location: Partial<Address>;
  startDate?: Date;
  endDate?: Date;
}

export const Quickenloans: Company = {
  name: "Quickenloans",
  headquarters: {
    addressLineOne: "1050 Woodward Ave",
    city: "Detroit",
    state: "Michigan",
    zip: "48226",
    country: "USA"
  },
  type: "Private",
  website: "https://www.quickenloans.com/",
  industry: "Mortgage",
  areaServed: "United States of Ameria"
}

export const Cognizant: Company = {
  name: "Cognizant",
  headquarters: {
    city: "Teaneck",
    state: "New Jersey"
  },
  type: "Public",
  website: "https://www.cognizant.com/",
  industry: "IT Services, IT Consulting",
  areaServed: "Worldwide"
}

export const experiences: Experience[] = [
  {
    positions: [
      {
        title: "Software Developer"
      },
      {
        title: "Software Quality Engineer"
      }
    ],
    company: Quickenloans,
    location: {
      city: "Detroit",
      state: "Michigan"
    }
  },
  {
    positions: [{
      title: "Quality Engineer and Assurance Analyst"
    }],
    company: Cognizant,
    location: {
      city: "Detroit",
      state: "Michigan"
    }
  }
]

