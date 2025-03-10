import styled from 'styled-components';

export const SnippetListContainer = styled.div`
  background-color: #2e2e2e;
  color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #f5f5f5;
  border-bottom: 2px solid #4a4a4a;
  padding-bottom: 10px;
`;

export const SnippetListUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SnippetListItem = styled.li`
  margin-bottom: 20px;
  background-color: #4a4a4a;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #3a3a3a;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a6a6a;
  }
`;

export const SnippetTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  color: #f5f5f5;
`;

export const SnippetCode = styled.pre`
  background: #2e2e2e;
  padding: 10px;
  border-radius: 5px;
  color: #f5f5f5;
  overflow-x: auto;
`;

export const SnippetLanguage = styled.p`
  font-style: italic;
  color: #f5f5f5;
`;
