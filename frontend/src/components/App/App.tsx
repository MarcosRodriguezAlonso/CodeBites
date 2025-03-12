import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SnippetList from '../SnippetList/SnippetList';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SnippetList />} />
      </Routes>
    </Router>
  );
};

export default App;
