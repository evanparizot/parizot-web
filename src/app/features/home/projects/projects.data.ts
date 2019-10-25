export interface Project {
  title: string;
  description: string;
  url: string;
  backgroundUrl: string;
  show?: boolean;
}

export const projects: Project [] = [
  {
    title: "Catan",
    description: "description one",
    url: "https://google.com",
    backgroundUrl: "http://assets.parizot.info/evan/backgrounds/vElJSDx.jpg",
  }
]