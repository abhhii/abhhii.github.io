import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'twigger',
    title: 'Twigger - Twitter Clone',
    description: 'A python application written in Django that mimics core Twitter functionalities.',
    technologies: ['Python', 'Django', 'MongoDB', 'Bootstrap'],
    githubUrl: 'https://github.com/abhhii/twigger',
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management App',
    description: 'An android application for managing stock levels in warehouse. Built with modern Android development practices.',
    technologies: ['Android', 'Java', 'SQLite', 'Material Design'],
    githubUrl: 'https://github.com/abhhii/InventoryManager',
  },
  {
    id: 'stock-app',
    title: 'Drishta - Track real value of stocks',
    description: 'A modern web application that analyzes stock performance in real value terms by measuring stocks against commodities like gold, silver, or oil. This provides insight into true purchasing power growth independent of fiat currency inflation.',
    technologies: ['Vite', 'TypeScript', 'React'],
    githubUrl: 'https://github.com/abhhii/drishta',
    liveUrl: 'https://drishta.vercel.app/',
  },
  {
    id: 'trichy-guide',
    title: 'TrichyGuide',
    description: 'City guide mobile application showcasing local attractions, restaurants, and cultural sites in Tiruchirappalli.',
    technologies: ['Android'],
    githubUrl: 'https://github.com/abhhii/TrichyGuide',
  },
  {
    id: 'melody',
    title: 'Melody - Music Player',
    description: 'Basic music player for Android with custom equalizer and seamless playback controls.',
    technologies: ['Android', 'Java', 'MediaPlayer API', 'SQLite'],
    githubUrl: 'https://github.com/abhhii/melody',
  },
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    description: 'Web-based chat application with real-time messaging, user authentication, and room-based conversations. Supports file sharing and emoji reactions.',
    technologies: ['Node.js', 'Socket.io', 'Express', 'MongoDB', 'React'],
    githubUrl: 'https://github.com/abhhii/chat-app',
    liveUrl: 'https://chat-app-demo.example.com',
  },
  {
    id: 'cassava-leaf-detection',
    title: 'Cassava Leaf Disease Detection',
    description: 'Deep learning based cassava leaf disease detection system using machine learning classification algorithms. Features image preprocessing, feature extraction, and model comparison.',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow'],
    githubUrl: 'https://www.kaggle.com/code/abhhii/cassava-efficientnet-with-gpu',
  }
  
];
