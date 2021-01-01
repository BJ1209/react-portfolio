import React from 'react';
import * as DevIcons from 'react-icons/di';
import * as FAIcons from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import NetflixClone from './images/projects/Netflix-clone.png';
import YoutubeClone from './images/projects/youtube-clone.png';
import COVID19Tracker from './images/projects/Covid-19-tracker.png';
import SlackClone from './images/projects/slack_clone.jpg';
import profilepic from './images/profilePic.jpg';

const resumeData = {
  main: {
    name: 'Bikram Jeet Singh',
    occupation: 'ReactJS Developer',
    description: 'ReactJS Developer with Firebase',
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
        url: 'https://github.com/Bikram1209',
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
        title: 'Slack Clone',
        imageUrl: SlackClone,
        url: 'https://slack-clone-bjs.web.app/',
      },
      {
        title: 'Netflix Web Clone',
        imageUrl: NetflixClone,
        url: 'https://netflix-clone-bjs.web.app/',
      },
      {
        title: 'COVID-19 Tracker',
        imageUrl: COVID19Tracker,
        url: 'https://covid-19-tracker-b.web.app/',
      },
      {
        title: 'Youtube Clone',
        imageUrl: YoutubeClone,
        url: 'https://clone-bjs.web.app/',
      },
    ],
  },
};

export default resumeData;
