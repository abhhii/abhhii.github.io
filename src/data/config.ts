import type { PersonalInfo, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Abhishek Singhal',
  title: 'Software Engineer',
  subtitle: 'Backend Developer with 4+ Years of Experience',
  email: 'abhhii.cse@gmail.com', // Update with actual email
  location: 'New Delhi, India',
  bio: 'Passionate Backend Developer specializing in Spring Boot, Kafka, and PostgreSQL. With over 4 years of experience building scalable distributed systems and microservices, I focus on creating robust solutions that drive business value. Strong advocate for clean code, test-driven development, and collaborative problem-solving.',
  profileImage: '/profile.jpg', // Add profile image to public folder
  resumeUrl: '/resume.pdf', // Add resume PDF to public folder
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/abhhii', // Update with actual GitHub username
    icon: 'FaGithub',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abhhii/', // Update with actual LinkedIn profile
    icon: 'FaLinkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/Abhhiishek', // Update with actual Twitter handle
    icon: 'FaTwitter',
  },
];

export const githubUsername = 'abhhii'; // Update with actual GitHub username
