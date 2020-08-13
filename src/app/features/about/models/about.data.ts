import { Experience, Company, Profile, Certification, Education } from './about'

export const QuickenLoans: Company = {
  name: "Quicken Loans",
  iconUrl: "https://assets.evanparizot.com/icons/ql_100x100.png",
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
  areaServed: "United States of America"
}

export const Cognizant: Company = {
  name: "Cognizant",
  iconUrl: "https://assets.evanparizot.com/icons/cognizant_100x100.jpg",
  headquarters: {
    city: "Teaneck",
    state: "New Jersey"
  },
  type: "Public",
  website: "https://www.cognizant.com/",
  industry: "IT Services, IT Consulting",
  areaServed: "Worldwide"
}

export const Amazon: Company = {
  name: "Amazon",
  iconUrl: "https://assets.evanparizot.com/icons/amazon.png",
  headquarters: {
    city: "Seattle",
    state: "Washington"
  },
  type: "Public",
  website: "https://amazon.com",
  industry: "Consumer, Retail, Technology",
  areaServed: "Worldwide"
}

export const experience: Experience[] = [
  {
    positions: [
      {
        title: "Software Development Engineer"
      }
    ],
    company: Amazon,
    location: {
      city: "Detroit", 
      state: "Michigan"
    }
  },
  {
    positions: [
      {
        title: "Software Developer"
      },
      {
        title: "Software Quality Engineer"
      }
    ],
    company: QuickenLoans,
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

export const certifications: Certification[] = [
  {
    name: 'Amazon Web Services Developer - Associate',
    issuer: 'AWS',
    issueDate: 'FEB 2020',
    experationDate: 'FEB 2023',
    verification: '',
    iconUrl: 'https://assets.evanparizot.com/icons/aws_100x100.jpg'
  },
  {
    name: 'Amazon Web Services Solutions Architect - Associate',
    issuer: 'AWS',
    issueDate: 'NOV 2019',
    experationDate: 'NOV 2022',
    verification: '',
    iconUrl: 'https://assets.evanparizot.com/icons/aws_100x100.jpg'
  }
]

export const education: Education[] = [
  {
    schoolName: "Texas A&M University",
    degree: "Bachelor's",
    areaOfStudy: "Electrical Engineering",
    graduationYear: "2015",
    iconUrl: "https://assets.evanparizot.com/icons/texasA&M_371x371.svg"
  }
]

export const profile: Profile = {
  name: 'Evan Parizot',
  about: 'Originally from Houston, Texas, I currently reside in the Detroit, Michigan area. I currently do software development at Amazon.',
  pictureUrl: 'https://assets.evanparizot.com/profile/reinvent_300x300.jpg',
  experience: experience,
  education: education,
  certifications: certifications
}