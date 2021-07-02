import { nanoid } from 'nanoid';

// Head data
export const headData = {
    title: 'Name | Developer', // e.g: 'Name | Developer'
    description: 'Welcome to my portfolio', // e.g: Welcome to my website
  };
  
  // Hero data
  export const heroData = {
    title: 'Hi, my name is',
    name: 'Sarah',
    subtitle: 'I\'m a developer!',
    cta: 'Know more',
  };
  
  // About data
  export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: '', // if no resume, the button will not show up
  };
  
  // Projects data
  export const projectsData = [
    {
      id: nanoid(),
      img: 'project.jpg',
      title: 'Virtual Terrarium',
      info: 'Drag and drop plants to make your own terrarium!',
      info2: '',
      url: '',
      repo: 'https://github.com/schz25/terrarium', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'project.jpg',
      title: 'Piggy Bank',
      info: 'Bank App to track funds',
      info2: '',
      url: '',
      repo: 'https://github.com/schz25/piggy-bank', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'project.jpg',
      title: 'Water Temperatures',
      info: 'Graph showing different water temperatures',
      info2: '',
      url: '',
      repo: 'https://github.com/schz25/water-temps', // if no repo, the button will not show up
    },
  ];
  
  // Contact data
  export const contactData = {
    cta: '',
    btn: '',
    email: '',
  };
  
  // Footer data
  export const footerData = {
    networks: [
      {
        id: nanoid(),
        name: 'twitter',
        url: '',
      },
      {
        id: nanoid(),
        name: 'codepen',
        url: '',
      },
      {
        id: nanoid(),
        name: 'linkedin',
        url: '',
      },
      {
        id: nanoid(),
        name: 'github',
        url: '',
      },
    ],
  };
  