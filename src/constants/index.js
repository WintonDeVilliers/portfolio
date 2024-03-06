
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import ablogonew from '../../src/assets/company/ablogonew.png';
import python from '../../src/assets/tech/python.png';
import java from '../../src/assets/tech/java.png';
import MySql from '../../src/assets/tech/Mysql.png';

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
    title: "Frontend Developer",
    icon: web,
  },
   {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Help-Desk Soft Skills",
    icon: backend,
  },
 
  {
    title: "Analysis & Documentation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
    {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mysql",
    icon: MySql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },


];

const experiences = [
  {
    title: "Digital Call Script",
    company_name: "African Bank",
    icon: ablogonew,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "The Proposed project aims to digitize call-scripts to improve Consultants' on-call compliance,and improve both Consultant and Customer experience during our Customer acquisition stage.As well as optimise distribution and version control of our QA call script tools.",
      "Web-application, that will have with in it all tools like scripts,check-lists and product catalogs as well as other infographic material.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Use of voice analytics to mitigate against regulatory compliance ommissions",
      "Voice analytics also assist sales agents with ML generated suggestions for objection handling",

    ],
  },
  {
    title: "QA Score Card",
    company_name: "African Bank",
    icon: ablogonew,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "This project aims to develop a web application that replaces the existing Excel-based quality assurance score-cards.",
      "The application will provide a user-friendly form interface resembling the current Excel sheet while maintaining the same score calculations.",
      "It will leverage data-analysis capabilities to gather insights from captured data", 
      "Provide data visualisation enabling improved analysis and decision-making.",
      
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };