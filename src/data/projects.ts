import coiasImage from "../images/coias.jpg";
import coiasImage1 from "../images/coias1.png";
import coiasImage2 from "../images/coias2.png";
import classroomImage from "../images/classroom.jpg";
import spogocchiImage from "../images/spogocchi.png";
import spogocchiImage1 from "../images/spogocchi_1.png";
import spogocchiImage2 from "../images/spogocchi_2.png";
import spogocchiImage3 from "../images/spogocchi_3.png";
import spogocchiImage4 from "../images/spogocchi_4.png";
import yenn1 from "../images/yenn1.png";
import yenn2 from "../images/yenn2.png";
import yenn3 from "../images/yenn3.png";
import { CarouselItemProps } from "../types";

export const projects: CarouselItemProps[] = [
  {
    name: "COIAS(Come On! Impacting ASteroids)",
    description: `COIAS is a web application that democratizes the discovery of potentially hazardous, undiscovered asteroids, making it accessible to both experts and non-experts, including students. It leverages technologies like React, Python, and Docker.
        
        As a full-stack engineer, I played a vital role in this project. COIAS is already live and widely used. One notable achievement was significantly improving the user experience. I reduced the asteroid discovery process from 10 minutes in the desktop version to just 2-3 minutes.   COIAS is a crucial tool for asteroid threat awareness, and my UX enhancements have made it more user-friendly and efficient.`,
    skills: ["React", "TypeScript", "Python", "Mysql", "Docker"],
    imgSrc: coiasImage,
    projectScreenshots: [coiasImage, coiasImage1, coiasImage2],
    link: "https://web-coias.u-aizu.ac.jp/",
  },
  {
    name: "SupoGotchi",
    description: `SupoGotchi is a mobile app designed for enjoyable exercise management, primarily built using React Native and Go. During a hackathon, I collaborated with a team of about 10 university peers to develop this app.
        In SupoGotchi, users can track exercise records and watch their avatars evolve or devolve based on performance. Users can also manage weight and height.
        I participated as a frontend engineer using React Native and TypeScript. My role involved designing a user-friendly interface and creating a cross-platform app. This project allowed me to enhance my frontend development skills and contribute to team efforts.SupoGotchi promotes a healthy lifestyle and fun for users, showcasing my growth in frontend development and teamwork experience.`,
    skills: ["React", "TypeScript", "Go", "Docker"],
    imgSrc: spogocchiImage,
    projectScreenshots: [
      spogocchiImage,
      spogocchiImage1,
      spogocchiImage2,
      spogocchiImage3,
      spogocchiImage4,
    ],
    link: "https://github.com/aizuHackathon",
  },
  {
    name: "Yenn",
    description: `Yenn is an innovative blogging platform that stands at the intersection of simplicity and advanced technology. Initially created as a personal blog, the vision for Yenn is to eventually extend its reach to a broader user base. At its core, Yenn is designed to be extraordinarily user-friendly, ensuring that users can navigate to and read articles with minimal effort and maximum enjoyment.
    The platform is built on a robust technical framework that combines React and TypeScript for a responsive and dynamic frontend. The backend is powered by Python FastAPI, known for its speed and reliability, while PostgreSQL ensures a stable and secure database. The integration of these technologies results in a seamless, fluid experience for the user.
    A key feature of Yenn is its streamlined navigation, which allows readers to access content with fewer clicks, promoting a focused and uninterrupted reading experience. While currently serving as a personal blogging space, Yenn is constructed with scalability in mind, laying the groundwork for future expansion and community building.
    Looking ahead, Yenn aspires to evolve from a personal platform into a vibrant, communal space for diverse stories and perspectives, all while staying true to its foundational principles of simplicity and user-centric design.`,
    skills: ["React", "TypeScript", "Python", "Aws", "PostgreSQL"],
    imgSrc: yenn1,
    projectScreenshots: [yenn1, yenn2, yenn3],
    link: "https://blog-front-mauve-theta.vercel.app",
  },
  {
    name: "Student Management System",
    description:
      "This is a student management application for teachers of junior high school students, using web and Android devices. web is made in React and typescript for teachers, and students can write test results, class comments, diaries, etc. on their Android devices. The system streamlines the work in the field of education, which used to be done manually.",
    skills: ["React", "Python", "Aws"],
    imgSrc: classroomImage,
    projectScreenshots: [classroomImage],
    link: "",
  },
];
