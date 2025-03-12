import styled from 'styled-components';

export const SnippetListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.75);
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  text-align: left;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 10px;
  text-align: center;
`;

export const SnippetListUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SnippetListItem = styled.li`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.3s ease;
  text-align: left;
  width: 100%;
  position: relative;
  padding-bottom: 40px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SnippetTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const SnippetCode = styled.pre`
  background: ${({ theme }) => theme.colors.background};
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SnippetLanguage = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
`;
