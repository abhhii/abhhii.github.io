import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    category: 'Backend Development',
    skills: [
      { name: 'Spring Boot', level: 90 },
      
      { name: 'FastAPI', level: 80 },
      { name: 'Python', level: 88 },
      { name: 'Node.js', level: 75 },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 65 },
      { name: 'HTML5/CSS3', level: 85 },
      { name: 'React', level: 50 },
      { name: 'TypeScript', level: 65 },
    ],
  },
  {
    category: 'Databases & Storage',
    skills: [
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 60 },
      { name: 'Apache Kafka', level: 85 },
      { name: 'Redis', level: 70 },
      
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 80 },
      { name: 'CI/CD', level: 70 },
    ],
  }
];
