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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Project Manager",
    icon: mobile,
  },
  {
    title: "UI/UX Developer",
    icon: backend,
  },
  {
    title: "Digital Marketer",
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FRONTEND WEB DEVELOPER",
    company_name: "Wezen Education PVT. LTD.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2022 - November 2023",
    points: [
      "Optimized website performance, implemented SEO strategies, and managed sites for Classic IAS Academy, Classic Infra Services, and Colluni Overseas Education.",
      "Enhanced a PHP - JavaScript POS system and developed a customer resolution tool using Latest tools",
      "Ensured smooth operations, regular updates, and improved user experience across multiple platforms",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer / Project Manager",
    company_name: "Nettechnocrats It Services PVT. LTD.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2023 - Present",
    points: [
      "Developed responsive, high-performance web applications using modern frontend technologies, enhancing website load speed by 30%",
      "Built reusable frontend components, reducing development time by 20% and ensuring consistency across projects.",
      "Translated complex UI/UX designs into scalable, pixel-perfect code with full cross-browser and mobile compatibility.",
      "Managed multiple frontend projects with Jira, Microsoft Project, Asana, and Trello, ensuring 100% on-time delivery through clear timelines and task tracking.",
      "Facilitated client communication, requirement gathering, and documentation, ensuring alignment with business goals and smooth project execution.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sumit proved me wrong.",
    name: "Vivek Jha.",
    designation: "Founder",
    company: "Lex claws",
    image: "https://lexclaws.com/assets/img/person/vivek.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sumit does.",
    name: "Mohd. Danish",
    designation: "COO",
    company: "Magic Repairs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sumit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Oliver Laug",
    designation: "CEO",
    company: "SPATO GmbH",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHJj8VtakMuig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666119760704?e=1760572800&v=beta&t=gF6Gy_WkpzXEuh6_Lb8XEpPECJfTLw4KtfJAOGeQojQ",
  },
];

const projects = [
  {
    name: "Lex Claws",
    description:
      "Lexclaws is a trusted law firm delivering expert legal services, including litigation, advisory, compliance, and personalized solutions for individuals, businesses, and organizations with professionalism",
    tags: [
      {
        name: "PhP",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://lexclaws.com/",
  },
  {
    name: "ANARC",
    description:
      "Anark is a reimagined watch website offering a modern, elegant, and user-friendly shopping experience for premium timepieces, built for effortless watch exploration and purchase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/darksitecoder/anarc-watch",
  },
  {
    name: "Book Mandir",
    description:
      "Bookmandir is an online e-commerce platform offering a wide collection of books across genres, providing readers with an easy, reliable, and convenient way to explore and purchase their favorite titles.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/darksitecoder/bookmandir",
  },
];

export { services, technologies, experiences, testimonials, projects };
