// data.ts
import {
  SiLaravel,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPhp,
  SiFastapi,
  SiPython,
} from "react-icons/si";

export interface ExperienceItem {
  title: string;
  position: string;
  date: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  image: string;
  description: string;
  statusTags: string[];
  tags: string[];
  githubLink?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  gpa: string;
}

export const header = {
  name: "Andra Rizki Pratama",
  role: "Software Engineer | TensorFlow Certified",
  location: "Jakarta, Indonesia",
  image: "me.jpg", // Add the path to the profile picture
  contact: {
    github: "https://github.com/andra-rizki-pratama",
    linkedin: "https://www.linkedin.com/in/andra-rizki-pratama/",
    email: "andra.rizki@example.com",
  },
};

export const about = {
  description: `Dedicated Web Developer with over 2 years of experience in creating user-friendly applications using Laravel, CodeIgniter4, and React JS. Proficient in machine learning with TensorFlow, PyTorch, and Pandas. Passionate about exploring new technologies and continuous learning.`,
};

export const experiences: ExperienceItem[] = [
  {
    title: "Bangkit Academy 2023 Batch 2",
    position: "Machine Learning Cohort",
    date: "Aug 2023 - Jan 2024",
    description:
      "Achieved high honors (Top 10%) in my studies and placed among the top teams (Top 50 out of 639 Projects) in a Capstone Project. Collaborating on projects to predict fish freshness and fish prices in Indonesia.",
  },
  {
    title: "SahabatPNJ",
    position: "Web Development Mentor",
    date: "Mar 2023 - Aug 2023",
    description:
      "Designed a web development course that included in-demand skills like HTML, CSS, JS, and building user logins with databases. To foster collaboration, I introduced online coding platforms and group presentations.",
  },
  {
    title: "PT Surya Mandiri Teknologi",
    position: "Full Stack Developer",
    date: "Nov 2022 - Feb 2023",
    description:
      "Built a user-friendly system for reporting facility and infrastructure issues for Poltekkes Kemenkes Jakarta III. This system streamlines the process by allowing users to submit complaints with photos and ensures clear communication through a secure login system.",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Politeknik Negeri Jakarta",
    degree: "Software Engineering / Informatics Engineering",
    date: "Jul 2021 - Present",
    gpa: "3.72",
  },
  {
    institution: "SMK Telkom Jakarta",
    degree: "Computer and Network Engineering",
    date: "Jul 2017 - Oct 2020",
    gpa: "94.44",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "TanyaSahabat",
    image: "/chat.png",
    description:
      "A virtual assistant website application that allows users to interact through a conversation (chat) setting. The interface can receive questions, provide answers, and store conversation history.",
    statusTags: ["Finished"],
    tags: ["React.js", "FastAPI"],
    githubLink: "https://github.com/novelicious/tanya-sahabat",
  },
  {
    title: "Novelicious",
    image: "/novelicious.png",
    description:
      "Novelicious is an online bookstore dedicated to providing readers with a curated selection of Japanese light novels. As a book lover, I recognized the growing popularity of light novels and wanted to create a platform that celebrates this unique literary genre.",
    statusTags: ["Finished"],
    tags: ["React.js", "FastAPI", "E-commerce"],
    githubLink: "https://github.com/novelicious/novelicious-website",
  },
  {
    title: "Notedx",
    image: "/notedx.png",
    description:
      "Developed a note-taking application using ReactJS empowers users to capture and save ideas, while an archive feature keeps past entries organized for easy retrieval, ensuring valuable information remains readily accessible.",
    statusTags: ["Finished"],
    tags: ["React.js"],
    githubLink: "https://github.com/nulitas/notedx",
  },
  {
    title: "Anime OR Not",
    image: "/anime_or_not.png",
    description:
      "Created a user-friendly web application using Flask that lets users upload images and get predictions from a powerful image classifier.",
    statusTags: ["Might update it later."],
    tags: ["Anime? Is that a cartoon?", "Flask"],
    githubLink: "https://github.com/nulitas/anime-or-not",
  },
  {
    title: "CI4 Point of Sale",
    image: "/posu.png",
    description:
      "Built a user-friendly point-of-sale (POS) application using CodeIgniter4 to streamline sales management.",
    statusTags: ["Might update it later."],
    tags: ["E-commerce lite "],
    githubLink: "https://github.com/nulitas/ci4-point-of-sale",
  },
  {
    title: "Sipadu",
    image: "/sipadu.png",
    description:
      "A user-friendly reporting mechanism allowing consumers to report issues or repairs for specific items. A reporting function that would make it simple for consumers to report any problems or repairs required for a particular item mostly using Laravel Livewire and TailwindCSS for the design.",
    statusTags: ["Deployed."],
    tags: ["Laravel"],
    githubLink: "https://sipadu.poltekkesjakarta3.ac.id/",
  },
];

export const skills = [
  { text: "React", Icon: SiReact },
  { text: "Tailwind", Icon: SiTailwindcss },
  { text: "TypeScript", Icon: SiTypescript },
  { text: "Laravel", Icon: SiLaravel },
  { text: "FastAPI", Icon: SiFastapi },
  { text: "Python", Icon: SiPython },
  { text: "PHP", Icon: SiPhp },
  { text: "MySQL", Icon: SiMysql },
];
