import React from 'react';
import SnippetList from '../SnippetList/SnippetList';
import { AppContainer } from './AppStyled';

const App: React.FC = () => {
  return (
    <AppContainer>
      <SnippetList />
    </AppContainer>
  );
};

export default App;
