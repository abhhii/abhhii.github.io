# Abhishek Singhal - Portfolio Website

A modern, responsive portfolio website built with React 18, Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark mode support
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **Smooth Animations**: Professional animations using Framer Motion
- **GitHub Integration**: Displays real-time GitHub statistics and repositories
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Accessible**: WCAG 2.1 AA compliant
- **Type Safe**: Built with TypeScript for better code quality
- **Theme System**: Theme toggle, theme persistence with localstorage

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **API**: GitHub REST API (via Axios)
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/abhhii/abhhii.github.io.git
cd abhhii.github.io
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Configuration

### Personal Information

Update personal information in \`src/data/config.ts\`

### Projects

Add or update projects in \`src/data/projects.ts\`

### Skills

Update skills in \`src/data/skills.ts\`

### Experience

Update work experience in \`src/data/experience.ts\`

### Awards & Education

Update awards and education in \`src/data/awards.ts\`

## 🎨 Customization

### Colors

Customize the color scheme in \`tailwind.config.js\`

### Fonts

Update fonts in \`src/index.css\` by changing the Google Fonts import URL

## �� Content Updates

### Adding Profile Image

1. Add profile image to the \`public\` folder as \`profile.jpg\`
2. Update the \`profileImage\` path in \`src/data/config.ts\`

### Adding Resume

1. Add resume PDF to the \`public\` folder as \`resume.pdf\`
2. Update the \`resumeUrl\` path in \`src/data/config.ts\`

## 🚀 Deployment

### GitHub Pages (Automatic)

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

1. Go to your repository settings on GitHub
2. Navigate to Pages section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push your changes to the main branch
5. The site will be automatically deployed

### Manual Deployment

\`\`\`bash
npm run build
npm run deploy
\`\`\`

## 📄 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build locally
- \`npm run lint\` - Run ESLint
- \`npm run deploy\` - Deploy to GitHub Pages

## 👤 Author

**Abhishek Singhal**
- GitHub: [@abhhii](https://github.com/abhhii)

---

Made with ❤️ by Abhishek Singhal
