// data.ts
import {
  SiLaravel,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
} from "react-icons/si";

export interface ExperienceItem {
  title: string;
  position: string;
  date: string;
  description: string;
}

export interface ProjectItem {
  title: string;
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
  description: `Highly motivated Web Developer with 2+ years of experience designing, developing, and maintaining user-friendly web applications using Laravel, CodeIgniter4, and React JS. I have experience in machine learning using the libraries TensorFlow, PyTorch, and Pandas. I like to explore new technologies and continuously learn to stay ahead of the curve.`,
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
    title: "Novelicious",
    description:
      "Novelicious is an online bookstore dedicated to providing readers with a curated selection of Japanese light novels. As a book lover, I recognized the growing popularity of light novels and wanted to create a platform that celebrates this unique literary genre.",
    statusTags: ["-"],
    tags: ["React"],
    githubLink: "https://github.com/novelicious/novelicious-website",
  },
  {
    title: "Notedx",
    description:
      "Developed a note-taking application using ReactJS empowers users to capture and save ideas, while an archive feature keeps past entries organized for easy retrieval, ensuring valuable information remains readily accessible.",
    statusTags: ["No edit?"],
    tags: ["In progress", "React"],
    githubLink: "https://github.com/nulitas/notedx",
  },
  {
    title: "Anime OR Not",
    description:
      "Created a user-friendly web application using Flask that lets users upload images and get predictions from a powerful image classifier.",
    statusTags: ["Anime? Is that a cartoon?"],
    tags: ["In progress", "Flask"],
    githubLink: "https://github.com/nulitas/anime-or-not",
  },
  {
    title: "CI4 Point of Sale",
    description:
      "Built a user-friendly point-of-sale (POS) application using CodeIgniter4 to streamline sales management.",
    statusTags: ["E-commerce lite"],
    tags: ["Outdated. Might update it later.", "CodeIgniter4"],
    githubLink: "https://github.com/nulitas/ci4-point-of-sale",
  },
];

export const skills = [
  { text: "React", Icon: SiReact },
  { text: "NextJS", Icon: SiNextdotjs },
  { text: "Tailwind", Icon: SiTailwindcss },
  { text: "TypeScript", Icon: SiTypescript },
  { text: "Laravel", Icon: SiLaravel },
  { text: "FastAPI", Icon: SiFastapi },
  { text: "MySQL", Icon: SiPostgresql },
];
