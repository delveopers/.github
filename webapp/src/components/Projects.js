import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Projects.css';

export default function Projects({ org = 'delveopers' }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch public repos for the organization
    axios
      .get(`https://api.github.com/orgs/${org}/repos?per_page=100`)
      .then(res => {
        setRepos(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load repositories.');
        setLoading(false);
      });
  }, [org]);

  if (loading) return <p className="projects-loading">Loading repositories…</p>;
  if (error) return <p className="projects-error">{error}</p>;

  return (
    <div className="projects container">
      <h1 className="projects-header">Projects by {org}</h1>
      <hr />
      <div className="projects-grid">
        {repos.filter(repo => repo.name.toLowerCase() !== ".github").map(repo => (
          <div key={repo.id} className="repo-card">
            <h3 className="repo-name">{repo.name}</h3>
            <p className="repo-desc">
              {repo.description || 'No description provided.'}
            </p>
            <div className="repo-buttons">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on GitHub
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Homepage
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}