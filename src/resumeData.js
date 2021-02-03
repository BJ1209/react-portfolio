import React from 'react';
import * as DevIcons from 'react-icons/di';
import * as FAIcons from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';

import Amazon from './images/projects/Amazon.jpg';
import Spotify from './images/projects/Spotify-Clone.gif';
import COVID19Tracker from './images/projects/Covid-19-tracker.png';
import Whatsapp from './images/projects/whatsapp__home.jpg';
import Telegram from './images/projects/Home.jpg';
import profilepic from './images/profilePic.jpg';

const resumeData = {
  main: {
    name: 'Bikram Jeet Singh',
    occupation: 'ReactJS Developer',
    description: '#ReactJSDeveloper #Firebase',
    bio: "My Name is Bikram. I'm a Front-End ReactJS Developer.",
    contactmessage: 'Get in contact with me to receive further details',
    email: 'sbikram99975@gmail.com',
    imageURL: profilepic,
    phone: '+91-7017432800',
    address: {
      street: 'Premnagar',
      city: 'Dehradun',
      state: 'Uttrakhand',
      zipcode: '248007',
      country: 'India',
    },
    socials: [
      {
        name: 'linkedIn',
        url: 'https://www.linkedin.com/in/bikram-jeet-singh-733b161aa/',
        icon: <FAIcons.FaLinkedinIn className="nav__icon" />,
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/urs_bikram1209/',
        icon: <FAIcons.FaInstagram className="nav__icon" />,
      },
      {
        name: 'github',
        url: 'https://github.com/BJ1209',
        icon: <FAIcons.FaGithub className="nav__icon" />,
      },
    ],
  },
  resume: {
    education: [
      {
        school: 'Guru Nanak Dev Engineering College, Bidar',
        degree: 'Bachelors of Engineering, Computer Science',
        graduated: '2017 - Present',
        percentage: '72%',
      },
      {
        school: 'Kendriya Vidyalya F.R.I',
        degree: 'Senior Secondary (XII), Science',
        graduated: '2016',
        percentage: '85%',
      },
      {
        school: 'Kendriya Vidyalya F.R.I',
        degree: 'Secondary (X)',
        graduated: '2014',
        percentage: '76%',
      },
    ],
    skills: [
      {
        name: 'ReactJS',
        icon: <DevIcons.DiReact />,
      },
      {
        name: 'HTML 5',
        icon: <DevIcons.DiHtml5 />,
      },
      {
        name: 'CSS',
        icon: <DevIcons.DiCss3 />,
      },
      {
        name: 'SASS',
        icon: <DevIcons.DiSass />,
      },
      {
        name: 'JavaScript',
        icon: <DevIcons.DiJsBadge />,
      },
      {
        name: 'Firebase',
        icon: <SiFirebase />,
      },
      {
        name: 'Git',
        icon: <DevIcons.DiGit />,
      },
      {
        name: 'Node JS',
        icon: <DevIcons.DiNodejs />,
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: 'Amazon Clone - ReactJs, Hooks, Firebase',
        imageUrl: Amazon,
        link: 'https://clone-bjs-b7e81.web.app/',
        repo: 'https://github.com/BJ1209/Amazon-Web-Clone',
      },
      {
        title: 'Spotify Web Clone - ReactJs, Hooks, Spotify-Web-API',
        imageUrl: Spotify,
        repo: 'https://github.com/BJ1209/Spotify-Clone-react',
        link: 'https://spotify-clone-bjs.web.app/',
      },
      {
        title: 'COVID-19 Tracker - ReactJs, Hooks, API',
        imageUrl: COVID19Tracker,
        link: 'https://covid-19-tracker-b.web.app/',
      },
      {
        title: 'Telegram Clone - ReactJs, Hooks, real-time-messaging',
        imageUrl: Telegram,
        link: 'https://telegram-clone-bjs.web.app/',
        repo: 'https://github.com/BJ1209/Telegram-clone',
      },
      {
        title: "Whatsapp Clone - ReactJs, Hooks,real-time-messaging, Emoji's and much more",
        imageUrl: Whatsapp,
        link: 'https://whatsapp-web-clone-bjs.web.app/',
        repo: 'https://github.com/BJ1209/WhatsApp-Web-Clone',
      },
    ],
  },
};

export default resumeData;
