import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { personalInfo, socialLinks } from '../../data/config';

const iconMap: Record<string, any> = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <FiMail className="text-primary-600 dark:text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <FiMapPin className="text-primary-600 dark:text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Connect with me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => {
                      const Icon = iconMap[link.icon];
                      return (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                          aria-label={link.platform}
                        >
                          <Icon size={24} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-8">
                  <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
                    Let's Work Together
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to reach out!
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                    className="w-full"
                  >
                    <FiMail />
                    Send me an email
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
