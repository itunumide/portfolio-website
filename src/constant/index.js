import project1 from "../assets/projects img/project.png";
import project2 from "../assets/projects img/project-2.png";
import project3 from "../assets/projects img/project-5.png";
import project6 from "../assets/projects img/project-6.png";

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
    year: "2024 - Present",
    role: "Frontend Developer Trainee",
    company: "Nerdz Factory ",
    description:
      "Developed real-world, responsive applications with a strong emphasis on user experience, maintainable code, and industry-standard development practices.",

    technologies: [
      "Javascript",
      "React.js",
      "HTML",
      "CSS",
      "REST APIs",
      "React Context API",
      "Redux",
      "Tailwind CSS",
    ],
  },
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
    title: "Car Rental App",
    image: project6,
    description:
      "The Car Rental App allows users to seamlessly browse, compare, and book vehicles, offering detailed information on availability, pricing, and features. Designed with a responsive, user-friendly interface, it ensures an efficient and enjoyable rental experience across devices.",
    technologies: ["HTML", "JavaScript", "React", "Tailwind CSS"],
    href: "https://car-rental-69nq.vercel.app",
    git: "https://github.com/itunumide/car-rental",
  },
  {
    title: "Youtube Clone",
    image: project3,
    description:
      "This RIATUBE is a React-based web application replicating key YouTube features, including video search, playback, and detailed views. Built with a responsive and user-friendly interface, this project demonstrates my skills in modern frontend development and creating seamless user experiences.",
    technologies: ["HTML", "JavaScript", "React", "Tailwind CSS"],
    href: "https://youtube-clone-rho-flax.vercel.app",
    git: "https://github.com/itunumide/youtubeClone",
  },
  {
    title: "Modern React Educational Platform",
    image: project2,
    description:
      "Edusity Clone is a modern frontend project built with React and Vite, styled with Tailwind CSS. It delivers a fast, responsive, and clean UI, showcasing my ability to create scalable and maintainable web applications with industry-standard tools.",
    technologies: ["HTML", "Tailwind CSS", "React","JavaScript"],
    href: "https://edusity-clone.vercel.app",
    git: "https://github.com/itunumide/edusity-clone",
  },
  {
    title: "Social Media Dashboard",
    image: project1,
    description:
      "The Social Media Dashboard provides users with a comprehensive overview of key metrics like followers and interactions, consolidating analytics from multiple platforms into one easy-to-use, visually appealing, and responsive interface.",
    technologies: ["HTML", "Tailwind CSS", "React", "JavaScript"],
    href: "https://social-media-dashboard-seven-silk.vercel.app",
    git: "https://github.com/itunumide/social-media-dashboard",
  },

  // {
  //   title: "Portfolio Website",
  //   image: project4,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  //   href: "https://itunu-raji.vercel.app",
  //   git: "https://github.com/itunumide/sail-portfolio",
  // },
  // {
  //   title: "Hero Page",
  //   image: project3,
  //   description:
  //     "This Hero Page is a visually appealing and user-friendly website using HTML and CSS to highlight the key features of the Snap remote work platform. Utilized responsive design principles to ensure optimal viewing across different devices.",
  //   technologies: ["HTML", "CSS", "Vue.js"],
  //   href: "https://hero-page-raji-itunu-idowus-projects.vercel.app",
  //   git: "https://github.com/itunumide/hero-Page",
  // },
];

export const CONTACT = {
  address: "Lagos, Nigeria ",
  phoneNo: "+234 705 324 379 ",
  email: "rajiitunuidowu@gmail.com",
};
