import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { useGitHubData } from '../../hooks/useGitHubData';
import { githubUsername } from '../../data/config';

export default function GitHub() {
  const { repos, stats, loading, error } = useGitHubData(githubUsername);

  if (loading) {
    return (
      <section id="github" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recent repositories and contributions on GitHub.
          </p>
        </motion.div>

        {/* GitHub Stats */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {stats.public_repos}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Repositories</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {stats.followers}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Followers</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {stats.following}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Following</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {stats.public_gists}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Gists</p>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Recent Repositories - Hidden
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Recent Repositories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex-grow">
                      {repo.name}
                    </h4>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {repo.language && (
                      <Badge variant="secondary">{repo.language}</Badge>
                    )}
                    <div className="flex items-center gap-1">
                      <FiStar size={14} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiGitBranch size={14} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium text-lg"
            >
              <FiGithub size={24} />
              View full GitHub profile
            </a>
          </motion.div>
        </div>
        */}

        {/* View GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium text-lg"
          >
            <FiGithub size={24} />
            View full GitHub profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
