import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SnippetList from '../SnippetList/SnippetList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SnippetList />} />
      </Routes>
    </Router>
  );
};

export default App;
