interface data {
  name: string;
  link?: string;
  sub?: {
    name: string;
    link: string;
  }[];
}

export const navData: data[] = [
  {
    name: "Home/News",
    link: "/",
  },
  {
    name: "Research",
    link: "/research",
  },
  {
    name: "Publications",
    link: "/publications",
  },
  {
    name: "Members",
    link: "/members",
  },
];
