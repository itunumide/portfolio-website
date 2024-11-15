import project1 from "../assets/projects img/project.png";
import project2 from "../assets/projects img/project-2.png";
import project3 from "../assets/projects img/project-3.png";
import project4 from "../assets/projects img/project-4.png";

export const HERO_CONTENT = `I am a passionate Frontend developer with a knack for crafting robust and scalable web applications. 
I have honed my skills in front-end technologies like React and Tailwiind CSS. 
My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated Frontend developer with passion for creating efficient and user-friendly web applications.
My journey in web development began with a deep curiosity for how things work,
 leveraging technology to enhance business processes and drive operational efficiency,
and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
I thrive in collaborative environments and enjoy solving problems to deliver high-quality solutions.
Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Frontend Developer Trainee",
    company: "SAIL Innovation Lab",
    description: `Collaborated with a team to design and develop web applications using HTML, CSS, 
    JavaScript, and React, enhancing user experience and functionality.`,
    technologies: ["Javascript", "React.js", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Social Media Dashboard",
    image: project1,
    description:
      "The Social Media Dashboard provides users with a comprehensive overview of key metrics like followers and interactions, consolidating analytics from multiple platforms into one easy-to-use, visually appealing, and responsive interface.",
    technologies: ["HTML", "Tailwind CSS", "React", "Javascript"],
    href: "https://social-media-dashboard-seven-silk.vercel.app",
    git: "https://github.com/itunumide/social-media-dashboard",
  },
  {
    title: "Form Page",
    image: project2,
    description:
      "This Form Page is a user-friendly contact form built using React, which allows users to input their name, email, and address. It features a simple yet responsive design implemented using styled-components for CSS-in-JS styling.",
    technologies: ["HTML", "CSS", "React"],
    href: "https://form-page-raji-itunu-idowus-projects.vercel.app",
    git: "https://github.com/itunumide/form-page",
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    href: "https://itunu-raji.vercel.app",
    git: "https://github.com/itunumide/sail-portfolio",
  },
  {
    title: "Hero Page",
    image: project3,
    description:
      "This Hero Page is a visually appealing and user-friendly website using HTML and CSS to highlight the key features of the Snap remote work platform. Utilized responsive design principles to ensure optimal viewing across different devices.",
    technologies: ["HTML", "CSS", "Vue.js"],
    href: "https://hero-page-raji-itunu-idowus-projects.vercel.app",
    git: "https://github.com/itunumide/hero-Page",
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria ",
  phoneNo: "+234 705 324 379 ",
  email: "rajiitunuidowu@gmail.com",
};
