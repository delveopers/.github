import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/Docs.css";

const docs = [
  {
    name: "Readme",
    project: "EnigmaDataset",
    url: "https://raw.githubusercontent.com/delveopers/EnigmaDataset/main/README.md"
  },
  {
    name: "Database",
    project: "EnigmaDataset",
    url: "https://raw.githubusercontent.com/delveopers/EnigmaDataset/main/docs/Database.md"
  },
  {
    name: "Dataset",
    project: "EnigmaDataset",
    url: "https://raw.githubusercontent.com/delveopers/EnigmaDataset/main/docs/Dataset.md"
  },
];

export default function DocsList() {
  const byProject = docs.reduce((acc, d) => {
    (acc[d.project] = acc[d.project] || []).push(d);
    return acc;
  }, {});

  return (
    <>
      <div className="docs my-5">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-12">
              <h1>Project Documentations</h1>
              <hr />
              {Object.entries(byProject).map(([project, docs]) => (
                <section key={project} className="project-section">
                  <h2>{project}</h2>
                  <ul>
                    {docs.map(d => (
                      <li key={d.name}>
                        <Link to={`/docs/${project}/${encodeURIComponent(d.name)}`}>
                          {d.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}