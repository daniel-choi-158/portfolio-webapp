import uuidv1 from 'uuid/v1';

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
    'I have experience in deploying platforms onto the Cloud (all as infrastructure-as-code), optimising deployments to adhere to the highest security, availability and resiliency standards. I have worked closely with both internal and external customers to create smooth user experiences, streamline processes and bring business ideas to life.',
  paragraphThree:
    "In my spare time, I enjoy trading the financial markets (FX, CFD's), reading, and watching Premier League Football.",
  resume: 'https://drive.google.com/file/d/11r0InvpNZZ8larKUxwK2iBcwgR7mewCc/view?usp=sharing', // if no resume, the button will not show up
};

//EXPERIENCE DATA
export const experienceData = [
  {
    id: uuidv1(),
    company: 'Atlassian',
    info: 'Information about Atlassian',
    info2: 'More information about Atlassian.',
  },
  {
    id: uuidv1(),
    company: 'Nearmap',
    info: '',
    info2: '',
  },
  {
    id: uuidv1(),
    company: 'Macquarie Group',
    info: '',
    info2: '',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Project 1',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
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
  cta: '',
  btn: '',
  email: 'danielchoi158@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/danielchoi158/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/daniel-choi-158',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
