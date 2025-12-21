import { useEffect, useState } from 'react';
import axios from 'axios';
import type { GitHubRepo, GitHubStats } from '../types';

interface GitHubData {
  repos: GitHubRepo[];
  stats: GitHubStats | null;
  loading: boolean;
  error: string | null;
}

export function useGitHubData(username: string): GitHubData {
  const [data, setData] = useState<GitHubData>({
    repos: [],
    stats: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      // Check cache
      const cacheKey = `github_data_${username}`;
      const cached = sessionStorage.getItem(cacheKey);
      
      if (cached) {
        const cachedData = JSON.parse(cached);
        const cacheTime = cachedData.timestamp;
        const now = Date.now();
        // Cache for 1 hour
        if (now - cacheTime < 3600000) {
          setData({
            repos: cachedData.repos,
            stats: cachedData.stats,
            loading: false,
            error: null,
          });
          return;
        }
      }

      try {
        setData((prev) => ({ ...prev, loading: true, error: null }));

        // Fetch user data and repos in parallel
        const [userResponse, reposResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ]);

        const stats: GitHubStats = {
          followers: userResponse.data.followers,
          following: userResponse.data.following,
          public_repos: userResponse.data.public_repos,
          public_gists: userResponse.data.public_gists,
        };

        const repos: GitHubRepo[] = reposResponse.data;

        // Cache the data
        sessionStorage.setItem(
          cacheKey,
          JSON.stringify({
            repos,
            stats,
            timestamp: Date.now(),
          })
        );

        setData({
          repos,
          stats,
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setData((prev) => ({
          ...prev,
          loading: false,
          error: 'Failed to load GitHub data. Please try again later.',
        }));
      }
    };

    if (username) {
      fetchGitHubData();
    }
  }, [username]);

  return data;
}
