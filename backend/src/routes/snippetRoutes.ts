import express from 'express';
import { createSnippet, listSnippets, deleteSnippet, updateSnippet } from '../controllers/snippetController';

const router = express.Router();

router.post('/snippets', createSnippet);
router.get('/snippets', listSnippets);
router.delete('/snippets/:id', deleteSnippet);
router.patch('/snippets/:id', updateSnippet);

export default router;
