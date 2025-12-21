import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { personalInfo } from '../../data/config';
import { FiMapPin, FiMail } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2">
              <Card className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
                  {personalInfo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I have a strong foundation in backend technologies and distributed systems, 
                  with hands-on experience in building microservices architectures. I'm passionate 
                  about writing clean, maintainable code and continuously learning new technologies 
                  to stay at the forefront of software development.
                </p>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Basic Information
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <FiMapPin className="text-primary-600 dark:text-primary-400" size={20} />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <FiMail className="text-primary-600 dark:text-primary-400" size={20} />
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Languages
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>English</span>
                    <span className="text-primary-600 dark:text-primary-400">Fluent</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Hindi</span>
                    <span className="text-primary-600 dark:text-primary-400">Native</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
