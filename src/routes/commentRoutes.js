const express = require('express');

const router = express.Router();
const { addComment, deleteComment } = require('../controllers/commentController');

// Rota para adicionar um comentário a um post específico
router.post('/:postId/comments', addComment);

// Rota para deletar um comentário
router.delete('/:postId/comments/:commentId', deleteComment);

module.exports = router;
