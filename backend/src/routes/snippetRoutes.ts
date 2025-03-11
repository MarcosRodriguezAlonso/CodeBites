import express from 'express';
import { createSnippet, listSnippets, deleteSnippet } from '../controllers/snippetController';

const router = express.Router();

router.post('/snippets', createSnippet);
router.get('/snippets', listSnippets);
router.delete('/snippets/:id', deleteSnippet);

export default router;
