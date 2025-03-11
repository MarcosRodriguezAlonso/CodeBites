import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const deleteSnippet = (id: string) => {
  return api.delete(`/snippets/${id}`);
};

export default api;
