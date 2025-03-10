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
    <SnippetListContainer>
      <Title>Snippets</Title>
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
