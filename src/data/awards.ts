import type { Award, Education } from '../types';

export const awards: Award[] = [
  {
    id: 'google-scholarship',
    title: 'Google India Scholarship',
    organization: 'Google',
    year: '2017',
    description: 'Awarded Google India Scholarship for excellence in computer science and programming.',
  },
  {
    id: 'up-science-talent',
    title: 'Uttar Pradesh Science Talent Search Exam Scholarship',
    organization: 'Government of Uttar Pradesh',
    year: '2017',
    description: 'Recognized for exceptional performance in science and mathematics aptitude.',
  },
  {
    id: 'intel-edge-ai',
    title: 'Intel Edge AI Scholarship',
    organization: 'Intel & Udacity',
    year: '2019',
    description: 'Selected for Intel Edge AI Scholarship program to learn AI at the edge with OpenVINO toolkit.',
  },
];

export const education: Education[] = [
  {
    id: 'iiit-trichy',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'IIIT Tiruchirappalli',
    duration: '2017 - 2021',
    description: 'Focused on software engineering, algorithms, data structures, and machine learning. Active participant in coding competitions and technical clubs.',
  },
];
