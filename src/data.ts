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
  SiNextdotjs,
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
  image: "me.jpg",
  contact: {
    github: "https://github.com/andra-rizki-pratama",
    linkedin: "https://www.linkedin.com/in/andra-rizki-pratama/",
    email: "andra.rizki@example.com",
  },
};

export const about = {
  description: `Informatics Engineering student with over 2 years of hands-on experience in web development, specializing in internal and open-source projects. Proficient in React.js, Next.js, and Tailwind CSS, with a passion for creating user-friendly applications. Seeking opportunities to leverage my skills in a dynamic development team.`,
  cv: "CV_Andra_Rizki_Pratama.pdf",
  discord:
    "https://lanyard.kyrie25.me/api/395543211709431818?imgStyle=square&gradient=e9d6d5-e9d6d5-f3b1b4-ffffff&bg=0d1117",
};

// <img src="https://lanyard.kyrie25.me/api/395543211709431818?imgStyle=square&gradient=e9d6d5-e9d6d5-f3b1b4-ffffff&bg=0d1117" width="50%" align="left" />

export const experiences: ExperienceItem[] = [
  {
    title:
      "Direktorat Jenderal Pendidikan Tinggi, Riset dan Teknologi Kemdikbudristek",
    position: "Front-End Developer",
    date: "Sep 2024 - Dec 2024",
    description:
      "Developed a content management system for PDDikti using TypeScript and React.js, which improved content update speed and increased user engagement by 25% in the first quarter. Integrated an API that enhanced data retrieval speed by 30%.",
  },
  {
    title: "Forum Mahasiswa Bidikmisi KIP Kuliah Politeknik Negeri Jakarta",
    position: "Full Stack Developer",
    date: "Jul 2024 - Sep 2024",
    description:
      "Built a voting system for FORMADIKSI PNJ using Laravel and Tailwind CSS, improving content update efficiency by 30% and user engagement by 25%. Collaborated with stakeholders to gather requirements, which led to a 20% increase in project alignment and satisfaction.",
  },
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
    title: "Poltekkes Kemenkes Jakarta III",
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
    gpa: "3.78",
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
    title: "Pilkadikip PNJ",
    image: "/pilkadikippnj.png",
    description:
      "A Voting System built with Laravel, designed to manage elections efficiently. The system allows administrators to create and manage elections, including adding candidates, positions, and registered voters. ",
    statusTags: ["Finished"],
    tags: ["Laravel"],
    githubLink: "https://github.com/nulitas/pilkadikip-pnj",
  },
  {
    title: "TanyaSahabat",
    image: "/chat.png",
    description:
      "A virtual assistant website application that allows users to interact through a conversation (chat) setting. The interface can receive questions, provide answers, and store conversation history.",
    statusTags: ["Finished"],
    tags: ["React.js", "FastAPI"],
    githubLink: "https://github.com/nulitas/tanya-sahabat",
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
    title: "Simple Note App",
    image: "/notedx.png",
    description:
      "Developed a note-taking application using ReactJS empowers users to capture and save ideas, while an archive feature keeps past entries organized for easy retrieval, ensuring valuable information remains readily accessible.",
    statusTags: ["Finished"],
    tags: ["React.js"],
    githubLink: "https://github.com/nulitas/simple-note-app",
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
  { text: "Next", Icon: SiNextdotjs },
  { text: "Tailwind", Icon: SiTailwindcss },
  { text: "TypeScript", Icon: SiTypescript },
  { text: "Laravel", Icon: SiLaravel },
  { text: "FastAPI", Icon: SiFastapi },
  { text: "Python", Icon: SiPython },
  { text: "PHP", Icon: SiPhp },
  { text: "MySQL", Icon: SiMysql },
];
