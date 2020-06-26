import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Daniel Choi | DevOps Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Daniellllllllllllllllllllllllllllllllllllll.',
  subtitle: "I'm a DevOps & Systems Engineer based in Sydney.",
  cta: 'About me',
  img: 'emoji.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "Four years' experience as a DevOps Engineer. I am currently serving as a Systems Engineer at Atlassian.",
  paragraphTwo:
    'I have experience in deploying platforms onto the Cloud (all as infrastructure-as-code), optimising deployments to adhere to the highest security, availability and resiliency standards. (Talk about outcomes achieved)',
  paragraphThree: 'Interests - Premier League, Investing and Technical Trading',
  resume: 'https://drive.google.com/file/d/11r0InvpNZZ8larKUxwK2iBcwgR7mewCc/view?usp=sharing', // if no resume, the button will not show up
};

//SKILLS AND EXPERIENCE DATA
export const skillsExperienceData = [
  {
    id: uuidv1(),
    company: 'Atlassian',
    info: 'Information about Atlassian',
    info2: 'Mor information about Atlassian.',
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
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
