import { Experience, Company, Profile, Certification, Education } from './about'

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
  areaServed: "United States of America"
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

export const experience: Experience[] = [
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
    graduationYear: "2015"
  }
]

export const profile: Profile = {
  name: 'Evan Parizot',
  about: 'Originally from Houston, Texas, I currently reside in the Detroit, Michigan area. I do software development at Quickenloans, a Detroit headquartered mortgage company.',
  pictureUrl: 'https://assets.evanparizot.com/profile/reinvent_300x300.jpg',
  experience: experience,
  education: education,
  certifications: certifications
}