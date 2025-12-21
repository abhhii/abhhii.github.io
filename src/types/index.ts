export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  duration: string;
  description: string;
  type: 'work' | 'volunteer';
  icon?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  location: string;
  bio: string;
  profileImage?: string;
  resumeUrl?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}
