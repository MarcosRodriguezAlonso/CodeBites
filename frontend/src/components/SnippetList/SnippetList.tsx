import React, { useEffect, useState } from 'react';
import api from '../../api';

interface Snippet {
  _id: string;
  title: string;
  code: string;
  language: string;
  createdAt: string;
}

const SnippetList: React.FC = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await api.get('/snippets');
        setSnippets(response.data);
      } catch (error) {
        console.error('Error fetching snippets:', error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <div>
      <h1>Snippets</h1>
      <ul>
        {snippets.map((snippet) => (
          <li key={snippet._id}>
            <h2>{snippet.title}</h2>
            <pre>{snippet.code}</pre>
            <p>{snippet.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SnippetList;
