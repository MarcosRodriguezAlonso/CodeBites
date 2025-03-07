import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

app.get('/api', (_, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
