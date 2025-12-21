import type { Award, Education } from '../types';

export const awards: Award[] = [
  {
    id: 'sprint-awards',
    title: 'Star of the sprint awards',
    organization: 'Nextuple Inc',
    year: '2021',
    description: 'Awarded multiple star of the sprints from year 2021 to 2024 for outstanding contribution and significant impact during the sprint.',
  },
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
