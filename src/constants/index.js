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
  carrent,
  jobit,
  tripguide,
  threejs,
  omsk,
  dresden,
  lugano,
  luxembourg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Software Engineering",
    icon: web,
  },
  {
    title: "Blockchain Smart Contracts",
    icon: mobile,
  },
  {
    title: "Self-Sovereign Identity",
    icon: backend,
  },
  {
    title: "Zero-Knowledge Proof",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: html,
  },
  {
    name: "TypeScript",
    icon: css,
  },
  {
    name: "Solidity",
    icon: javascript,
  },
  {
    name: "Circom",
    icon: typescript,
  },
  {
    name: "Ethereum",
    icon: reactjs,
  },
  {
    name: "Algorand",
    icon: redux,
  },
  {
    name: "Node.js",
    icon: tailwind,
  },
  {
    name: "React",
    icon: nodejs,
  },
  {
    name: "React Native",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: threejs,
  },
  {
    name: "AWS",
    icon: figma,
  },
  {
    name: "CloudFlare",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Omsk State Transport University",
    company_name: "Omsk, Russia",
    icon: omsk,
    iconBg: "#E6DEDD",
    date: "September 2013 - February 2019",
    points: [
      "Russian Presidential Scholarship",
      "Specialist degree \"Information-Analytical Security Systems\" with Honours 5.0/5.0",
      "Trade Union Committee member",
      "Academic Council member",
    ],
  },
  {
    title: "Dresden University of Technology",
    company_name: "Dresden, Germany",
    icon: dresden,
    iconBg: "#E6DEDD",
    date: "October 2016 - March 2017",
    points: [
      "Georgius Agricola Scholarship",
      "Master's exchange programme \"Distributed Systems Engineering\"",
    ],
  },
  {
    title: "University of Lugano",
    company_name: "Lugano, Switzerland",
    icon: lugano,
    iconBg: "#E6DEDD",
    date: "January 2018 - June 2018",
    points: [
      "Master Research Scholarship",
      "Scientific collaborator at \"Ubiquitous Computing Research Group\"",
      "Project \"Just Share It\"",
      "Publication \"Sharing physical objects using smart contracts\"",
    ],
  },
  {
    title: "Platinum",
    company_name: "Huahin, Thailand",
    icon: lugano,
    iconBg: "#E6DEDD",
    date: "July 2018 - February 2019",
    points: [
      "Position of Blockchain&Fullstack developer at Crypto start-up",
      "Development of Smart Contracts of Ethereum blockchain for ICO, marketing, and gambling",
      "Automation of Airdrops, including Merkle trees",
      "Sales at the \"Beyond Blocks 2018\" blockchain summit in Bangkok",
    ],
  },
  {
    title: "GShopper",
    company_name: "Moscow, Russia",
    icon: lugano,
    iconBg: "#E6DEDD",
    date: "March 2019 - January 2021",
    points: [
      "R&D position in the e-commerce start-up",
      "Cracked Amazon's CAPTCHA algorithm which reached 98% resolving rate from the first attempt which saved a lot of money",
      "Fullstack developments in the data scrapping domain",
      "Design of microservice-based infrastructure, using Rabbit MQ",
      "Development of Chrome extensions for passive data scrapping",
      "Development of human-like behavioural algorithms for browser automation, using Headless Chrome",
      "Facilitation and fine-tuning of Optical Character Recognition neural networks",
    ],
  },
  {
    title: "University of Luxembourg",
    company_name: "Luxembourg City, Luxembourg",
    icon: luxembourg,
    iconBg: "#E6DEDD",
    date: "February 2021 - Nowadays",
    points: [
      "Doctoral researcher at \"FINATRAX Research Group\"",
      "Focus on \"Blockchain Benchmarking\", \"Self-Sovereign Identity\", and \"Zero-Knowledge Proof\"",
      "Project \"European Blockchain Services Infrastructure Luxembourg\"",
      "Victory on hackathon. Project \"MEETS ID\" - decentralised management system for medical e-prescriptions",
      "Double victory on hackathon. Project \"Gamification for Reduced Energy Consumption\" - secure infrastructure to preserve privacy when using energy consumption data",
      "Publication \"z-Commerce: Designing a data-minimizing one-click checkout solution\"",
      "Publication \"Beyond a Fistful of Tumblers: Toward a Multi-layered Taxonomy of Ethereum-based Crypto-asset Mixers\"",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FastCarSale",
    description:
      "Landing page for a leading car buy back service with a form which collects requests from clients and send via email",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "CloudFlare",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "http://fastcarsale.ru/",
  },
  {
    name: "Just Share It",
    description:
      "A cross-platform mobile application for Sharing Economy which facilitates Etheruem blockchain as a medium for monetary interaction and its Smart Contracts for handling trustworthy and publicly accessible rating of users and stages of borrowing/lending",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "Ionic",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "EBSILUX",
    description:
      "High-level architecture design for an early-adopter project of the European Blockchain Infrastructure Luxembourg, diploma use-case",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Walt.id",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Voice of ChatCPT",
    description:
        "Telegram bot which allows for access to ChatGPT without location-based discrimination",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Telegraf",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "MEETS ID",
    description:
        "Copy description for the article",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },

    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gamification for Reduced Energy Consumption",
    description:
        "Copy description for the article",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },
      {
        name: "Remix",
        color: "pink-text-gradient",
      },
      {
        name: "Circom",
        color: "pink-text-gradient",
      },
      {
        name: "MPC",
        color: "pink-text-gradient",
      },

    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
