import React, { useEffect, useState } from 'react';
import api from '../../api';
import {
  SnippetListContainer,
  Title,
  SnippetListUl,
  SnippetListItem,
  SnippetTitle,
  SnippetCode,
  SnippetLanguage
} from './SnippetListStyled';

interface Snippet {
  _id: string;
  title: string;
  code: string;
  language: string;
  createdAt: string;
}

const SnippetList: React.FC = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await api.get('/snippets');
        setSnippets(response.data);
      } catch {
        setError('Error fetching snippets');
      }
    };

    fetchSnippets();
  }, []);

  return (
    <SnippetListContainer>
      <Title>Snippets</Title>
      {error ? (
        <p>{error}</p>
      ) : (
        <SnippetListUl>
          {snippets.map((snippet) => (
            <SnippetListItem key={snippet._id}>
              <SnippetTitle>{snippet.title}</SnippetTitle>
              <SnippetCode>{snippet.code}</SnippetCode>
              <SnippetLanguage>{snippet.language}</SnippetLanguage>
            </SnippetListItem>
          ))}
        </SnippetListUl>
      )}
    </SnippetListContainer>
  );
};

export default SnippetList;
