import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

export default function DocsPage() {
  const { project, docName } = useParams();
  const [md, setMd] = useState('');
  const [loading, setLoading] = useState(true);

  const entry = docs.find(
    d => d.project === project && d.name === decodeURIComponent(docName)
  );

  useEffect(() => {
    if (!entry) return;
    fetch(entry.url)
      .then(r => r.ok ? r.text() : Promise.reject('Fetch error'))
      .then(txt => {
        setMd(txt);
        setLoading(false);
      })
      .catch(console.error);
  }, [entry]);

  if (!entry) {
    return <p>Document not found. <Link to="/docs">Back to docs list</Link></p>;
  }

  if (loading) return <p>Loading…</p>;

  return (
    <div className="container doc-page">
      <Link to="/docs">← Back to all docs</Link>
      <div className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {md}
        </ReactMarkdown>
      </div>
    </div>
  );
}