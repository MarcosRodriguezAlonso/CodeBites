import React, { useState } from 'react';
import api from '../../api';
import {
  FormContainer,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
} from './SnippetFormStyled';
import { Snippet } from '../../types/Snippet';

interface SnippetFormProps {
  onSnippetCreated: (snippet: Snippet) => void;
}

const SnippetForm: React.FC<SnippetFormProps> = ({ onSnippetCreated }) => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await api.post('/snippets', { title, code, language });
      onSnippetCreated(response.data);
      setSuccess('Snippet created successfully!');
      setTitle('');
      setCode('');
      setLanguage('');
    } catch {
      setError('Error creating snippet');
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <FormLabel htmlFor="title">Title</FormLabel>
          <FormInput
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="code">Code</FormLabel>
          <FormTextarea
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="language">Language</FormLabel>
          <FormInput
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
        </FormField>
        <FormButton type="submit">Create Snippet</FormButton>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </FormContainer>
  );
};

export default SnippetForm;
