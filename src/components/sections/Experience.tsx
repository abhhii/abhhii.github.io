import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers } from 'react-icons/fi';
import Timeline from '../ui/Timeline';
import Card from '../ui/Card';
import { experiences } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions to various organizations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Timeline>
            {experiences.map((exp, index) => (
              <Timeline.Item
                key={exp.id}
                icon={
                  exp.type === 'work' ? (
                    <FiBriefcase className="text-primary-600" />
                  ) : (
                    <FiUsers className="text-primary-600" />
                  )
                }
                active={index === 0}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description.split('\n').filter(line => line.trim()).map((line, idx) => (
                      <li key={idx} className="ml-2">{line.trim()}</li>
                    ))}
                  </ul>
                </Card>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
