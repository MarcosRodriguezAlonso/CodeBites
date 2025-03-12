import React, { useEffect, useState } from 'react';
import { toast, Zoom } from 'react-toastify';
import api from '../../api';
import { deleteSnippet } from '../../api';
import SnippetForm from '../SnippetForm/SnippetForm';
import DeleteButton from '../Button/Button';
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
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Error fetching snippets';
        setError(errorMessage);
      }
    };

    fetchSnippets();
  }, []);

  const handleSnippetCreated = (newSnippet: Snippet) => {
    setSnippets([...snippets, newSnippet]);
    toast.success('Snippet created!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    }); 
  };

  const handleDeleteSnippet = async (id: string) => {
    try {
      await deleteSnippet(id);
      setSnippets(snippets.filter(snippet => snippet._id !== id));
      toast.error('Snippet deleted!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error deleting snippet';
      setError(errorMessage);
    }
  };

  return (
    <SnippetListContainer>
      <Title>CodeBites</Title>
      <SnippetForm onSnippetCreated={handleSnippetCreated} />
      {error && <p>{error}</p>}
      <SnippetListUl>
        {snippets.map((snippet) => (
          <SnippetListItem key={snippet._id}>
            <SnippetTitle>{snippet.title}</SnippetTitle>
            <SnippetLanguage>{snippet.language}</SnippetLanguage>
            <SnippetCode>{snippet.code}</SnippetCode>
            <DeleteButton onClick={() => handleDeleteSnippet(snippet._id)} />
          </SnippetListItem>
        ))}
      </SnippetListUl>
    </SnippetListContainer>
  );
};

export default SnippetList;
