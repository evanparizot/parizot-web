export interface Project {
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  sources?: ProjectSource[];
}

export interface ProjectSource {
  sourceName?: string;
  sourceIcon?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Catan",
    description: "Custom laser cut Settlers of Catan board game",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/catan_300x300.jpg",
    sources : [
      {
        sourceName: "Github",
        sourceIcon: "github",
        sourceUrl: "https://github.com/evanparizot/catan"
      },
      {
        sourceName: "Imgur",
        sourceUrl: "https://imgur.com/a/GNPO1"
      }
    ]
  },
  {
    title: "Cutting Board",
    description: "3D endgrain cutting board made using cherry, walnut, and maple",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/cuttingboard_300x300.jpg",
    sources: [
      {
        sourceName: "Imgur",
        sourceUrl: "https://imgur.com/a/9ZtARZi"
      }
    ]
  },
  {
    title: "Piano Coat Rack",
    description: "'Piano' coat rack made using solid maple. Hangs stuff",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/pianocoat_300x300.jpg",
    sources: [
      {
        sourceName: "Imgur",
        sourceUrl: "https://imgur.com/gallery/gaKtPGn"
      }
    ]
  },
  {
    title: "Wordclock",
    description: "In progress prototype wordclock",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/wordclock_300x300.png",
    sources: [
      {
        sourceName: "Github",
        sourceIcon: "github",
        sourceUrl: "https://github.com/evanparizot/wordclock"
      }
    ]
  },
  {
    title: "Toolboxes",
    description: "Japanese style toolboxes made out of walnut, maple, and cherry",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/toolboxes_300x300.jpg",
    sources: [
      {
        sourceName: "Imgur",
        sourceUrl: "https://imgur.com/a/yiolIla"
      }
    ]
  },
  {
    title: "Topographic Map",
    description: "Laser cut topographic map of Austin, Texas using public GIS information",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/austinmap_300x300.jpg",
    sources: [
      {
        sourceName: "Imgur",
        sourceUrl: "https://imgur.com/a/pkqeI0n"
      }
    ]
  },
  {
    title: "Website",
    description: "The website that you're currently using",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/website_300x300.jpg",
    sources: [
      {
        sourceName: "Github",
        sourceIcon: "github",
        sourceUrl: "https://github.com/evanparizot/website"
      }
    ]
  },
  {
    title: "PC",
    description: "Custom hardline watercooled computer",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/computer_300x300.jpg",
    sources: [
      {
        sourceName: "Imgur",
        sourceUrl: "https://imgur.com/a/PeQ0E"
      }
    ]
  },
  {
    title: "JBL Speakers",
    description: "Restored, vintage JBL L26 Century Speakers",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/speakers_300x300.jpg",
    sources: [
      {
        sourceName: "Imgur",
        sourceUrl: "https://imgur.com/a/pdVpFP3"
      }
    ]
  },
  {
    title: "Plant Stands",
    description: "Simple plants stands with mortise and tenon joints. Made out of cherry.",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/plantstands_300x300.jpg",
    sources: [
      {
        sourceName: "Imgur",
        sourceUrl: "https://imgur.com/a/DSSKPzK"
      }
    ]
  },
  {
    title: "Picture Frames",
    description: "Custom picture frames for artwork done by Tim Doyle",
    thumbnailUrl: "https://assets.evanparizot.com/projects/thumbnails/frames_300x300.jpg",
    sources: [
      {
        sourceName: "Imgur",
        sourceUrl: "https://imgur.com/a/RiOC68B"
      },
      {
        sourceName: "Tim Doyle",
        sourceUrl: "https://www.timdoyle.com/"
      }
    ]
  }
]