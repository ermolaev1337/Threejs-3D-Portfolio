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
  figma,
  docker,
  tripguide,
  threejs,
  omsk,
  dresden,
  lugano,
  luxembourg,
  bangkok,
  moscow,
  fastcarsale,
  justshareit,
  fastcarsaleIcon,
  justshareitIcon,
  ebsilux,
  ebsiluxIcon,
  chatgpt,
  chatgptIcon,
  prescription,
  prescriptionIcon, mpczkp, mpczkpIcon,
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
    company_name: "Bangkok, Thailand",
    icon: bangkok,
    iconBg: "#E6DEDD",
    date: "July 2018 - February 2019",
    points: [
      "Blockchain&Fullstack position in the Crypto start-up",
      "Development of Smart Contracts of Ethereum blockchain for ICO, marketing, and gambling",
      "Automation of Airdrops, including Merkle trees",
      "Sales at the \"Beyond Blocks 2018\" blockchain summit in Bangkok",
    ],
  },
  {
    title: "GShopper",
    company_name: "Moscow, Russia",
    icon: moscow,
    iconBg: "#E6DEDD",
    date: "March 2019 - January 2021",
    points: [
      "R&D position in the E-Commerce start-up",
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
      "Landing page for a leading car buyback service with a form that collects requests from clients and sends them via email",
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
    image: fastcarsale,
    logo:fastcarsaleIcon,
    source_code_link: "http://fastcarsale.ru/",
  },
  {
    name: "Just Share It",
    description:
        "A cross-platform mobile application designed for the Sharing Economy that utilizes the Ethereum blockchain as a medium for monetary interaction and its Smart Contracts to handle trustworthy and publicly accessible user ratings as well as the various stages of borrowing and lending.",
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
      }
    ],
    image: justshareit,
    logo: justshareitIcon,
    source_code_link: "https://pc.inf.usi.ch/studentproject/just-share-it-smartphone-app-to-support-shearing-physical-objects-2/",
  },
  {
    name: "EBSILUX",
    description:
        "The EBSILUX project is intended to integrate Luxembourg into the European Blockchain Service Infrastructure (EBSI) and implement a European EBSI use case at the national level. This involves the design of a high-level architecture",
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
    image: ebsilux,
    logo: ebsiluxIcon,
    source_code_link: "https://ebsilux.lu/",
  },
  {
    name: "Voice of ChatCPT",
    description:
        "Telegram bot that permits access to the renowned ChatGPT without any discrimination.",
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
    image: chatgpt,
    logo: chatgptIcon,
    source_code_link: "https://t.me/VoiceOfChatGPTBot",
  },
  {
    name: "A Decentralized Electronic Prescription Management System",
    description:
        "A decentralized electronic prescription management system will digitize, transform, and simplify current prescription processes; speed up transactions; reduce costs; and increase transparency and trust",
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
    image: prescription,
    logo: prescriptionIcon,
    source_code_link: "https://wwwfr.uni.lu/snt/news_events/finatrax_participates_in_winning_team_for_infrachain_challenge_2021",
  },
  {
    name: "Gamification for Reduced Energy Consumption",
    description:
        "A secure infrastructure is provided for the privacy-preserving use of energy consumption data. It enables individuals and organizations to compete for the lowest electricity consumption and to earn rewards for winning in an open ecosystem",
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
    image: mpczkp,
    logo: mpczkpIcon,
    source_code_link: "https://wwwfr.uni.lu/snt/news_events/finatrax_is_once_again_winner_of_the_infrachain_challenge",
  },
];

export { services, technologies, experiences, testimonials, projects };
