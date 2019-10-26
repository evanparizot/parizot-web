export interface Project {
  title: string;
  description?: string;
  backgroundUrl?: string;
  source?: string;
  sourceIcon?: string;
  sourceUrl: string;
  show?: boolean;
}

export const projects: Project [] = [
  {
    title: "Catan",
    description: "Custom laser cut Settlers of Catan",
    backgroundUrl: "http://assets.parizot.info/evan/projects/catan.jpg",
    source: "Github",
    sourceIcon: "github",
    sourceUrl: "https://github.com/evanparizot/catan"
  },
  {
    title: "Wordclock",
    description: "PCB and code for prototype wordclock",
    backgroundUrl: "",
    source: "Github",
    sourceIcon: "github",
    sourceUrl: "https://github.com/evanparizot/wordclock"
  },
  {
    title: "Website",
    description: "",
    backgroundUrl: "",
    source: "Github",
    sourceIcon: "github",
    sourceUrl: "https://github.com/evanparizot/website"
  },
  {
    title: "PC",
    description: "Hardline watercooled PC",
    backgroundUrl: "http://assets.parizot.info/evan/projects/watercooledPC.jpg",
    source: "Imgur",
    sourceIcon: "",
    sourceUrl: "https://imgur.com/a/PeQ0E"
  }
]