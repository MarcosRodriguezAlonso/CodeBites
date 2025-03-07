import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchData = async (path: string) => {
    try {
      const response = await fetch(`http://localhost:5000${path}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  useEffect(() => {
    fetchData(window.location.pathname);
  }, []);

  return (
    <div>
      {error ? (
        <h1>Error: {error}</h1>
      ) : (
        <h1>{message ? message : 'Loading message...'}</h1>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </Router>
);

export default AppWrapper;
