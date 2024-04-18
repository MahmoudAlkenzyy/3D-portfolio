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
  ecommerce,
  carrent,
  jobit,
  waildOasis,
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
    title: "UI Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "The Ultimate React Course",
    company_name: "Jonas Schmedtmann (Udemy)",
    // icon: TheWildOasis,
    iconBg: "#383E56",
    date: "Dec 2023 - Mar 2024",
    points: [
      "React",
      "Redux Toolkit",
      "React Query",
      "Tailwind",
      "Context API",
    ],
  },
  // points: [
  //     "Authentication and Authorization handle it in parallel with backend using supabase",
  //     `Dashboard to visualize all daily hotel sales, showing both "total" sales and "extras" sales in a visually appealing way`,
  //     `backend powered by Supabase to handle project data for guests, cabins, users, and bookings`,
  //     `Validation usaing React Hook Form to handle form validation, error handling, and form submission`,
  //   ],
  {
    title: "Front end development diplome ",
    company_name: "Route",
    // icon: Exclusive,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Feb 2024",
    points: [" Next JS", "React", "SCSS", "TS", "JQuary", "Bootsrap"],
  },
  // points: [
  //   "Developing and maintaining web applications using React.js and other related technologies.",
  //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //   "Implementing responsive design and ensuring cross-browser compatibility.",
  //   "Participating in code reviews and providing constructive feedback to other developers.",
  // ],
  // {
  //   title: "Next",
  //   company_name: "Car Hub",
  //   icon: carHup,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Pagination: navigation through a large dataset of cars, to explore multiple pages",
  //     "Exploration and Filtering: Explore a wide variety of cars from around the world,utilizing a search and filter system based on criteria such as model,manufacturer, year, fuel type,",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "TypeScript Types: Utilize TypeScript to provide robust typing for enhanced code quality and better development.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "The-wild-oasis",
    description:
      "This is an internal application that the hotel use it to manage hotel operations, including sales statistics, cabin management, user management, booking management, and various customization options. It integrates authentication, database",

    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "Styled Comp...",
        color: "pink-text-gradient",
      },
    ],
    image: waildOasis,
    source_code_link: "https://github.com/MahmoudAlkenzyy/the-wild-oasis",
    deploy_url:
      "https://the-wild-oasis-9rf8-git-main-mahmoudalkenzyys-projects.vercel.app/#/Cabins",
  },
  {
    name: "E-commerce",
    description:
      "This project provides to user different Realtime Search, product description viewing , adding and removing products from your cart , adding and removing from your Wishlist , and secure online payment transactions through an integrated payment gateway.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: " React-query",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/MahmoudAlkenzyy/E-commerce",
    deploy_url:
      "https://e-commerce-git-main-mahmoudalkenzyys-projects.vercel.app/",
  },
  {
    name: "Car-Hub",
    description:
      "A virtual car showroom designed to provide a smooth experience for exploring car information and images pulled from various APIs. It's a user-friendly web application built using React, Next.js 13, TypeScript, and Tailwind CSS",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MahmoudAlkenzyy/Car-Hub",
    deploy_url:
      "https://car-hub-git-master-mahmoudalkenzyys-projects.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
