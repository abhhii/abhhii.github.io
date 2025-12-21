import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'sse-onepint',
    title: 'Senior Software Engineer',
    company: 'Onepint.ai',
    duration: 'Apr 2025 - Present',
    description: 'Owned and delivered RBAC using AWS Cognito and AWS Amplify for the entire product offering.\nOwned the design and implementation of Apache NiFi data integrations with Shopify and NetSuite, forming the backbone of automated inventory and demand planning workflows.\n Designed and developed an Inventory Simulation engine that simulates real-time inventory usage while applying adverse scenarios.',
    type: 'work',
  },
  {
    id: 'sse-nextuple',
    title: 'Senior Software Engineer',
    company: 'Nextuple Inc.',
    duration: 'June 2021 - April 2025',
    description: ' Owned and delivered critical parts of the Promising and Sourcing engine(PSE) product. This product is used to find the optimal sourcing nodes to fulfill an order and find the delivery dates for it.\n Designed and developed the Cost Based Sourcing engine algorithm that optimizes the fulfillment node for an order based on cost of delivery.\n Performance tested and optimized application performance by improving latency by 40%.\nDeveloped scalable REST standard APIs in Spring boot with latency of up to 100ms at 250 tps load with extensive use of caching.\nDeveloped multi-org support functionality to convert on-premises deployment product to a SaaS offering.\nWrote clean, readable and optimized code based on OOPs principles and well-known design patterns.\nWrote Kafka Consumers and producers for inter-service communication.\nOptimized regression runs by 50% using Junit5 tests and Cucumber automation tests.',
    type: 'work',
  },
  {
    id: 'daa-zs',
    title: 'Decision Analytics Associate Intern',
    company: 'ZS Associates',
    duration: 'Feb 2021 - June 2021',
    description: 'Analysed sales force performance and recommended optimum sales force sizing and placement.',
    type: 'work',
  },
  {
    id: 'python-intern-pichain',
    title: 'Python Developer Intern',
    company: 'PiChain Labs',
    duration: 'Feb 2021 - June 2021',
    description: 'Added aadhar e-signing and developed a notification system for e-sign app.',
    type: 'work',
  },
  {
    id: 'web-intern-meity',
    title: 'GIS Developer Intern',
    company: 'Ministry of Electronics and IT, Govt. of India',
    duration: 'May 2019 - July 2019',
    description: 'Developed a decision support system to visually represent geographic, demographic, and cultural data on a map.\n This formed part of Bhuvan App of GOI.',
    type: 'work',
  }
];
