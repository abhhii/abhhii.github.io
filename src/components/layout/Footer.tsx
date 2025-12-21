import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { socialLinks } from '../../data/config';

const iconMap: Record<string, any> = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.platform}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p className="flex items-center gap-2 justify-center">
              Made with <FaHeart className="text-red-500" /> by Abhishek Singhal
            </p>
            <p className="mt-2">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
