/* eslint-disable consistent-return */
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

async function addComment(req, res) {
  try {
    const { postId } = req.params;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const comment = await Comment.create({ ...req.body, PostId: postId });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteComment(req, res) {
  try {
    const { postId, commentId } = req.params;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const comment = await Comment.findOne({ where: { id: commentId, PostId: postId } });
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    await comment.destroy();
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { addComment, deleteComment };
