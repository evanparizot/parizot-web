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
    title: "Cutting Board",
    description: "3d cutting board using cherry, walnut, and maple",
    backgroundUrl: "http://assets.parizot.info/evan/projects/3DcuttingBoard.jpg",
    source: "Imgur",
    sourceUrl: "https://imgur.com/a/9ZtARZi"
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
    title: "Toolboxes",
    description: "Japanese style toolboxes made out of walnut, maple, and cherry",
    backgroundUrl: "http://assets.parizot.info/evan/projects/japanese_toolbox.jpg",
    source: "Imgur",
    sourceUrl: "https://imgur.com/a/yiolIla"
  },
  {
    title: "Topographic Map",
    description: "Topographic map of Austin, Texas using public GIS information",
    backgroundUrl: "",
    source: "github",
    sourceIcon: "github",
    sourceUrl: "https://github.com/evanparizot/austin-map"
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
  },
  {
    title: "JBL Speakers",
    description: "Restored vintage JBL L26 Century Speakers",
    backgroundUrl: "",
    source: "Imgur",
    sourceIcon: "",
    sourceUrl: "https://imgur.com/a/pdVpFP3"
  }
]