import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import Card from '../ui/Card';
import { awards, education } from '../../data/awards';

export default function AwardsEducation() {
  return (
    <section id="awards-education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Awards & Achievements
              </h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                        <FiAward className="text-primary-600 dark:text-primary-400" size={24} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {award.title}
                        </h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                          {award.organization}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          {award.year}
                        </p>
                        {award.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {award.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                        <FiBookOpen className="text-primary-600 dark:text-primary-400" size={28} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">
                              {edu.degree}
                            </h3>
                            <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                              {edu.institution}
                            </p>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            {edu.duration}
                          </span>
                        </div>
                        {edu.description && (
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
