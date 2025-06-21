import { FcGoogle } from "react-icons/fc";
import {
  FaApple,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const experienceData = [
  {
    company: "Google",
    position: "Lead Software Engineer",
    date: "Nov 2018 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    icon: FcGoogle,
  },
  {
    company: "Apple",
    position: "Junior Software Engineer",
    date: "Jan 2016 - Dec 2017",
    description:
      "During my tenure at Apple, I held the role of Software Technical, where I played a key role in shaping the architecture of mobile-focused platforms. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
    icon: FaApple,
  },
  {
    company: "Meta",
    position: "Software Engineer",
    date: "Jan 2017 - Oct 2018",
    description:
      "At Meta, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    icon: FaMeta,
  },
];
export const gmail = "musfiqurrhaman6@gmail.com";
export const socialLinks = [FaLinkedin, FaTwitter, FaYoutube];
export const technologies = [
  FaReact,
  SiTailwindcss,
  SiShadcnui,
  TbBrandFramerMotion,
  SiFirebase,
  SiMongodb,
  SiExpress,
  FaNodeJs,
];

export const aboutMe = `I’m a passionate and versatile full-stack web developer with hands-on experience in building responsive, user-friendly applications using the MERN stack. I specialize in creating seamless digital experiences with React.js on the frontend and Node.js/Express.js on the backend, paired with MongoDB for data management. I enjoy transforming ideas into real-world solutions with clean code, modern UI design, and functional features. Always eager to learn and grow, I thrive in collaborative environments and love tackling challenging problems`;

export const glowing = {
  glow: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2.5,
      ease: "linear",
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};

export const whatsapp = "https://wa.me/+8801794213788?text=Hello%20there";

export const navItems = [
  {
    name: "home",
    pathName: "/",
  },
  {
    name: "projects",
    pathName: "/projects",
  },
  {
    name: "about",
    pathName: "/about",
  },
  {
    name: "contact",
    pathName: "/contact",
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const blurVariant = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};
