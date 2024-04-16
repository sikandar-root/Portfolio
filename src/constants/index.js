import { BlendModeNode } from "three/examples/jsm/nodes/Nodes.js";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  artyfact,
  aimedis,
  sdlccorp,
  Artyfact_Main,
  Amica_main,
  Aimedis_main,
  UnrealEngine,
  CPP,
  Blender,
  MySQL,
  Steam,
  EPicGame,
  AWS,
  RestAPI,
  MappleStory,
  PUBG,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Design  Principles",
    icon: web,
  },
  {
    title: "Game Mechanics Implementation",
    icon: mobile,
  },
  {
    title: "Game Programming (C++,Blueprint)",
    icon: backend,
  },
  {
    title: "Debugging and Troubleshooting",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Unreal Engine",
    icon: UnrealEngine,
  },
  {
    name: "Blender",
    icon: Blender,
  },
  {
    name: "C++",
    icon: CPP,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Steam OSS",
    icon: Steam,
  },
  {
    name: "Epic OSS",
    icon: EPicGame,
  },
  
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "RestAPI",
    icon: RestAPI,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Unreal engine Game Developer",
    company_name: "SDLC Corp",
    icon: sdlccorp,
    iconBg: "#095e8b",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining web applications using Unreal Engine and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Unreal engine Game Developer ",
    company_name: "Aimedis B.V.",
    icon: aimedis,
    iconBg: "#0f5029",
    date: "Aug 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using Unreal Engine and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Artyfact Metaverse",
    description:
      "Artyfact Metaverse Artyfact is the next-generation Gaming Metaverse that seamlessly merges AAA gaming experiences with innovative GameFi activities.",
    tags: [
      {
        name: "UnrealEngine 5.3",
        color: "blue-text-gradient",
      },
      {
        name: "Epic OSS",
        color: "green-text-gradient",
      },
      {
        name: "BSC BlockChain",
        color: "pink-text-gradient",
      },
    ],
    image: Artyfact_Main,
    source_code_link: "https://github.com/",
  },
  {
    name: "Amica Metaverse",
    description:
      "Led the development of a PvP sword fighting VR game, leveraging Unreal Engine to deliver a thrilling and immersive gameplay experience.",
    tags: [
      {
        name: "UnrealEngine 5.0.3",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Gamelift",
        color: "green-text-gradient",
      },
      {
        name: "BSC Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: Amica_main,
    source_code_link: "https://github.com/",
  },
  {
    name: "Avalon Metaverse",
    description:
      " Played a pivotal role in developing a healthcare-focused virtual world using Unreal Engine, providing innovative solutions for virtual healthcare services.",
    tags: [
      {
        name: "Unreal Engine 5.0",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Gamelift",
        color: "green-text-gradient",
      },
      {
        name: "ReadyPlayerMe",
        color: "pink-text-gradient",
      },
    ],
    image: Aimedis_main,
    source_code_link: "https://github.com/",
  },
];


const PresnolWork = [
  {
    name: "PUBG Clone",
    description:
      "Developed a PUBG-inspired game using Unreal Engine, implementing core mechanics such as battle royale gameplay, weapon systems, and multiplayer functionality. Leveraged Unreal Engine's robust tools for realistic graphics and immersive environments. Successfully replicated key features of PUBG while adding unique elements to create an engaging gameplay experience.",
    tags: [
      {
        name: "Unreal Engine 4.24",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Gamelift",
        color: "green-text-gradient",
      },
      {
        name: "Blueprint",
        color: "pink-text-gradient",
      },
    ],
    image: PUBG,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mapple Story Clone",
    description:
      "Developed a MapleStory-inspired game using Unreal Engine, integrating classic MMORPG mechanics such as character customization, questing, and multiplayer interactions. Utilized Unreal Engine's advanced features for creating vibrant 2D environments and fluid animations. Captured the essence of MapleStory while introducing fresh gameplay elements for an enjoyable player experience.",
    tags: [
      {
        name: "Unreal Engine 4.27",
        color: "blue-text-gradient",
      },
      {
        name: "Azure Playfab",
        color: "green-text-gradient",
      },
      {
        name: "Paper ZD",
        color: "pink-text-gradient",
      },
    ],
    image: MappleStory,
    source_code_link: "https://github.com/",
  },
]
export { services, technologies, experiences, projects,PresnolWork };