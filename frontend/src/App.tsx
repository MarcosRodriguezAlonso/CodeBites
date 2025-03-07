import { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>{message ? message : 'Cargando mensaje...'}</h1>
    </div>
  );
};

export default App;
