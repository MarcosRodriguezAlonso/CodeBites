import React, { useEffect, useState } from 'react';
import api from '../../api';
import SnippetForm from '../SnippetForm/SnippetForm';
import {
  SnippetListContainer,
  Title,
  SnippetListUl,
  SnippetListItem,
  SnippetTitle,
  SnippetCode,
  SnippetLanguage,
} from './SnippetListStyled';
import { Snippet } from '../../types/Snippet';

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

  const handleSnippetCreated = (newSnippet: Snippet) => {
    setSnippets([...snippets, newSnippet]);
  };

  return (
    <SnippetListContainer>
      <Title>Snippets</Title>
      <SnippetForm onSnippetCreated={handleSnippetCreated} />
      {error && <p>{error}</p>}
      <SnippetListUl>
        {snippets.map((snippet) => (
          <SnippetListItem key={snippet._id}>
            <SnippetTitle>{snippet.title}</SnippetTitle>
            <SnippetCode>{snippet.code}</SnippetCode>
            <SnippetLanguage>{snippet.language}</SnippetLanguage>
          </SnippetListItem>
        ))}
      </SnippetListUl>
    </SnippetListContainer>
  );
};

export default SnippetList;
