// import uuidv4 from 'uuid/v1';
import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Daniel Choi | DevOps & Systems Engineer',
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Daniel.',
  subtitle: "I'm a DevOps & Systems Engineer based in Sydney.",
  cta: 'About me',
  img: 'emoji.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "I have four years' experience as a DevOps Engineer. I have worked in financial services, geo-imaging and technology industries. I am currently serving as a Systems Engineer at Atlassian.",
  paragraphTwo:
    'I have experience in architecting and deploying Cloud infrastructure that is highly secure, available and resilient. I have worked closely with both internal and external customers to create smooth user experiences, streamline processes and bring business ideas to life.',
  paragraphThree:
    "In my spare time, I enjoy trading the financial markets (FX, CFD's), reading, and watching Premier League Football.",
  resume: 'https://drive.google.com/file/d/11r0InvpNZZ8larKUxwK2iBcwgR7mewCc/view?usp=sharing', // if no resume, the button will not show up
};

//EXPERIENCE DATA
export const experienceData = [
  {
    id: uuidv4(),
    company: 'Atlassian',
    info: '',
    info2: '',
  },
  {
    id: uuidv4(),
    company: 'Nearmap',
    info: '',
    info2: '',
  },
  {
    id: uuidv4(),
    company: 'Macquarie Group',
    info: '',
    info2: '',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'project.jpg',
    title: 'Project 1',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'project.jpg',
    title: 'Project 2',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  networks: [
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/danielchoi158/',
    },
    {
      id: uuidv4(),
      name: 'envelope',
      url: 'mailto:danielchoi158@gmail.com',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/daniel-choi-158',
    },
  ],
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/danielchoi158/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/daniel-choi-158',
    },
    {
      id: uuidv4(),
      name: 'envelope',
      url: 'mailto:danielchoi158@gmail.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
